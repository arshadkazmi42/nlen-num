# nlen-num

[![Build](https://github.com/arshadkazmi42/nlen-num/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/nlen-num/actions/workflows/nodejs.yml)

Generate random number of n length.

## Install

```
npm i nlen-num
```

## Usage

```javascript
const nLenNum = require("nlen-num");

console.log(nLenNum(3));
console.log(nLenNum(4));
console.log(nLenNum());
console.log(nLenNum(0));

// OUTPUT
// 132
// 4323
// 562
// 456
```

> Note: Default length is 3, if there is no length input passed

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/nlen-num/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase
