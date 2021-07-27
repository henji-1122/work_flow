#!/usr/bin/env node 

process.argv.push('--cwd')
process.argv.push(process.cwd())  // 工作目录
process.argv.push('--gulpfile')  //gulpfile所在路径
process.argv.push(require.resolve('..'))  //require是载入模块，resolve是找到这个模块所对应的路径，..找到上一级后自动找package.json中main字段对应的路径，work_flow.js路径:work_flow/lib/work_flow.js 

// console.log(process.argv)
require('gulp/bin/gulp')