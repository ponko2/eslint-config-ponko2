# eslint-config-ponko2

[![npm version](https://badge.fury.io/js/eslint-config-ponko2.svg)](https://badge.fury.io/js/eslint-config-ponko2)
[![Build Status](https://travis-ci.org/ponko2/eslint-config-ponko2.svg?branch=master)](https://travis-ci.org/ponko2/eslint-config-ponko2)

## Install

```sh
$ npx install-peerdeps --dev eslint-config-ponko2
```

## Usage

### eslint-config-ponko2

Base + Node.js + Browser + ECMAScript 2015 (ES6)

```json
{
  "extends": "ponko2"
}
```

### eslint-config-ponko2/legacy

Base + Node.js v0.10 + Browser

```json
{
  "extends": "ponko2/legacy"
}
```

### eslint-config-ponko2/node

Base + Node.js v10

```sh
$ npm install --save-dev eslint-plugin-node
```

```json
{
  "extends": [
    "ponko2/node",
    "plugin:node/recommended"
  ]
}
```

### eslint-config-ponko2/browser

Base + Browser

```json
{
  "extends": "ponko2/browser"
}
```
