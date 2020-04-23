# wxc_workflow

[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> static web app workflow

## Installation

```shell
$ yarn add wxc_workflow

# or npm
$ npm install wxc_workflow
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const wxcWorkflow = require('wxc_workflow')
const result = wxcWorkflow('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### wxcWorkflow(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

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



[downloads-image]: https://img.shields.io/npm/dm/wxc_workflow.svg
[downloads-url]: https://npmjs.org/package/wxc_workflow
[version-image]: https://img.shields.io/npm/v/wxc_workflow.svg
[version-url]: https://npmjs.org/package/wxc_workflow
[license-image]: https://img.shields.io/github/license/Wangxc/wxc_workflow.svg
[license-url]: https://github.com/Wangxc/wxc_workflow/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/Wangxc/wxc_workflow.svg
[dependency-url]: https://david-dm.org/Wangxc/wxc_workflow
[devdependency-image]: https://img.shields.io/david/dev/Wangxc/wxc_workflow.svg
[devdependency-url]: https://david-dm.org/Wangxc/wxc_workflow?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
