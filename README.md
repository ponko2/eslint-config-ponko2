# eslint-config-ponko2

[![npm version](https://badge.fury.io/js/eslint-config-ponko2.svg)](https://badge.fury.io/js/eslint-config-ponko2)
[![Actions Status](https://github.com/ponko2/eslint-config-ponko2/actions/workflows/test.yml/badge.svg)](https://github.com/ponko2/eslint-config-ponko2/actions/workflows/test.yml)

## Usage

### eslint-config-ponko2

Base + Node.js + Browser

```js
const ponko2 = require('eslint-config-ponko2');

module.exports = [ponko2];
```

### eslint-config-ponko2/node

Base + Node.js

```sh
$ npm install --save-dev eslint-plugin-n
```

```js
const n = require('eslint-plugin-n');
const ponko2 = require('eslint-config-ponko2/node');

module.exports = [n.configs['flat/recommended-script'], ponko2];
```

### eslint-config-ponko2/browser

Base + Browser

```js
const ponko2 = require('eslint-config-ponko2/browser');

module.exports = [ponko2];
```
