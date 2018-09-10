> # ⚠️ Deprecated
> Use instead: https://patternplate.github.io/

> transform markdown to html in patternplate

# patternplate-transform-markdown [![stability][0]][1]

[![npm version][6]][7] [![Travis branch][2]][3]

## Installation

```shell
npm install --save patternplate-transform-markdown
```

## Usage

```js
// configuration/patternplate-server/patterns.js
module.exports = {
  formats: {
    md: {
      transforms: ['markdown']
    }
  }
};

// configuration/patternplate-server/formats.js
module.exports = {
  markdown: {
    inFormat: 'md',
    outFormat: 'html',
  }
};
```

---
(c) [SinnerSchrader Deutschland GmbH](https://github.com/sinnerschrader) and [contributors](./graphs/contributors). Released under the [MIT license]('./license.md').

[0]: https://img.shields.io/badge/stability-deprecated-red.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/travis/sinnerschrader/patternplate-transform-markdown/master.svg?style=flat-square
[3]: https://travis-ci.org/sinnerschrader/patternplate-transform-markdown
[6]: https://img.shields.io/npm/v/patternplate-transform-markdown.svg?style=flat-square
[7]: https://npmjs.org/package/patternplate-transform-markdown
