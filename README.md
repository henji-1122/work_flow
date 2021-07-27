# work_flow
### static web app workflow (gulp) __ By WangXincun

## Installation

```shell
$ yarn add wangxc_work_flow --dev

# or npm
$ npm install wangxc_work_flow --save-dev
```

in your package.json scripts:
```js
"scripts": {
  "clean": "wangxc_work_flow clean",
  "build": "wangxc_work_flow build",
  "develop": "wangxc_work_flow develop"
}
```

* CLI Usage:
```js
$ wangxc_work_flow <task> [options]
```

* eg
```js
# Runs the app in development mode
$ wangxc_work_flow serve --port 5210 --open
# Builds the app for production to the `dist` folder
$ wangxc_work_flow build --production
```


## Usage

<!-- TODO: Introduction of API use -->

```javascript
const workFlow = require('work_flow')
const result = workFlow('Wangxc')
```

## Folder Structure
```
└── my-awesome-pages ································· project root
   ├─ public ········································· static folder
   │  └─ favicon.ico ································· static file (unprocessed)
   ├─ src ············································ source folder
   │  ├─ assets ······································ assets folder
   │  │  ├─ fonts ···································· fonts folder
   │  │  │  └─ pages.ttf ····························· font file (imagemin)
   │  │  ├─ images ··································· images folder
   │  │  │  └─ logo.png ······························ image file (imagemin)
   │  │  ├─ scripts ·································· scripts folder
   │  │  │  └─ main.js ······························· script file (babel / uglify)
   │  │  └─ styles ··································· styles folder
   │  │     ├─ _variables.scss ······················· partial sass file (dont output)
   │  │     └─ main.scss ····························· entry scss file (scss / postcss)
   │  ├─ layouts ····································· layouts folder
   │  │  └─ basic.html ······························· layout file (dont output)
   │  ├─ partials ···································· partials folder
   │  │  └─ header.html ······························ partial file (dont output)
   │  ├─ about.html ·································· page file (use layout & partials)
   │  └─ index.html ·································· page file (use layout & partials)
   ├─ .gitignore ····································· git ignore file
   ├─ CHANGELOG.md ··································· repo changelog
   ├─ README.md ······································ repo readme
   ├─ gulpfile.js ···································· gulp tasks file
   ├─ package.json ··································· package file
   └─ yarn.lock ······································ yarn lock file
```




## API

<!-- TODO: Introduction of API -->

### workFlow(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `''`

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; 虫虫 <2475886163@qq.com>



[downloads-image]: https://img.shields.io/npm/dm/work_flow.svg
[downloads-url]: https://npmjs.org/package/work_flow
[version-image]: https://img.shields.io/npm/v/work_flow.svg
[version-url]: https://npmjs.org/package/work_flow
[license-image]: https://img.shields.io/github/license/Wangxc/work_flow.svg
[license-url]: https://github.com/Wangxc/work_flow/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/Wangxc/work_flow.svg
[dependency-url]: https://david-dm.org/Wangxc/work_flow
[devdependency-image]: https://img.shields.io/david/dev/Wangxc/work_flow.svg
[devdependency-url]: https://david-dm.org/Wangxc/work_flow?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
