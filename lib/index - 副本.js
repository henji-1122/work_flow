// gulp的入口文件

const {src, dest, parallel, series, watch} = require('gulp') 

//del并不是gulp的插件，但是字gulp中可以使用，因为我们之前使用gulp定义任务时，gulp的任务并不一定通过src去找文件流最终pipe到dist当中，我们也可以通过写代码去实现这个构建过程：例如del这个模块就可以自动帮我们删除指定的那些文件，而且他是一个promise方法，gulp任务是支持promise这种模式的。
const del = require('del')
const browserSync = require('browser-sync')
// browser-syn提供了一个create方法去创建一个服务
const bs = browserSync.create()

// 用gulp-load-plugins自动载入所有的插件
const loadPlugins = require('gulp-load-plugins')
const plugins = loadPlugins()

// const plugins.sass = require('gulp-sass')
// const plugins.babel = require('gulp-babel') // 需同时安装@babel/core、@babel/preset-env
// const plugins.swig = require('gulp-swig') // 模板引擎转换插件
// const plugins.imagemin = require('gulp-imagemin') // 图片压缩插件
const cwd = process.cwd()  //cwd()方法会获取当前命令行所在的项目目录
let config = {  // 如果没有works.config.js文件就执行默认配置
    // default config
   
}
try {
    const loadConfig = require('${cwd}/works.config.js')  //require不存在的路径会报错，所有用try catche包装
    config = Object.assign({}, config, loadConfig)  // 合并自定义和默认配置
} catch (error) {}

const clean = () => {
    // del返回的是一个promise函数，del完成过后他可以去标记clean任务完成
    // clean任务应该放在build任务的前面，先删除再生成
    // 此时需要对build任务再次包装，引入series执行串行任务
    return del(['dist', 'temp']) // 指定删除的文件
}

const style = () => {
    return src('src/assets/css/*.scss', {base:'src'})
        .pipe(plugins.sass({outputStyle:'expanded'}))
        .pipe(dest('temp'))
        .pipe(bs.reload({stream:true}))
}

const script = () => {
    return src('src/assets/js/*.js', {base:'src'})
        .pipe(plugins.babel({presets: ['@babel/preset-env']}))  // 若不传presets则转换不完全
        .pipe(dest('temp'))
        .pipe(bs.reload({stream:true}))
}

const page = () => {
    return src('src/*.html', {base:'src'})
        .pipe(plugins.swig({
            defaults: {cache: false },   //可能会因为swig模板引擎缓存的机制导致页面不会变
            data:config.data
        }))  
        .pipe(dest('temp'))
        .pipe(bs.reload({stream:true}))
}

const image = () => {
    return src('src/assets/images/**', {base:'src'})
        .pipe(plugins.imagemin())  
        .pipe(dest('dist'))
}

const font = () => {
    return src('src/assets/fonts/**', {base:'src'})
        .pipe(plugins.imagemin())  
        .pipe(dest('dist'))
}

const extra = () => { // 其他文件拷贝任务
    return src('public/**', {base:'public'})
        .pipe(dest('dist'))
}

// 创建服务
const serve = () => {
    // 监视src下的文件并执行相应任务
    watch('src/assets/css/*.scss', style) // 路径:要执行的任务
    watch('src/assets/js/*.js', script)
    watch('src/*.html', page)
    // watch('src/assets/images/**', image)
    // watch('src/assets/fonts/**', font)
    // watch('public/**', extra)
    watch([
        'src/assets/images/**',
        'src/assets/fonts/**',
        'public/**'
    ], bs.reload)

    bs.init({ // 通过init方法初始化服务相关配置
        notify: false, //显示browser-sync是否连接上，会影响页面调试样式
        port: 8090, // 默认3000
        open: false, // 默认自动打开浏览器
        // files可使用reload方式实现，因为在watch中每个文件发生变化都能监视到，所以在任务后再pipe(bs.reload({stream:true})),reload不是读或写，他执行完的结果只是内部把这个文件流里面的信息以流的方式推送到浏览器
        //files:'dist/**', // 被browser-sync启动后监听的路径通配符,此时改变dist下的文件会自动更新至浏览器
        server: {
            baseDir:['temp', 'src', 'public'], // 指定网站的根目录
            // 开发阶段的有先于baseDir的一个配置，当请求发生先看在routes有没有相关的配置，如果没有再走baseDir
            routes: {
                './node_modules':'node_modules' //键：请求的前缀，值：指到项目下的对应目录
            }
        }
    })
}

const useref = () => { // 构建注释处理任务
    return src('temp/**', {base: 'temp'})
        .pipe(plugins.useref({searchPath:['temp','.']})) // 引用的资源可能在temp中、可能在src下的node_modules中
        // html js css
        .pipe(plugins.if(/\.js$/, plugins.uglify())) 
        .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
        .pipe(plugins.if(/\.html$/, plugins.htmlmin({ //默认只删除空白符等，但换行符、行内样式及js并不压缩,要指定对应的参数
            collapseWhitespace: true,
            minifyCSS:true,
            minifyJS:true
        })))
        .pipe(dest('dist'))
}

const compile = parallel(style, script, page) // 组合任务，只处理src下的文件

// 上线之前执行的任务
const build = series(
    clean, 
    parallel(
        series(compile, useref), //useref要求compile先执行
        // image,
        font, 
        extra
    )
)

// 开发阶段执行的任务
const develop = series(compile, serve)

// module.exports = {
//     style,
//     script,
//     page,
//     image,
//     font,
//     extra,
//     clean
// }

module.exports = {
    clean,
    build,
    develop 
}