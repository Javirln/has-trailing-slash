# has-trailing-slash ![Build Status](https://travis-ci.org/Javirln/has-trailing-slash.svg?branch=master) [![npm version](https://badge.fury.io/js/has-trailing-slash.svg)](https://badge.fury.io/js/has-trailing-slash) ![Dependency Status](https://david-dm.org/javirln/has-trailing-slash.svg)

Checks if a string has a trailing slash

## Installation

with [npm](https://npmjs.org/):

    $ npm install has-trailing-slash

## API

### `hasTrailingSlash(str)`

Checks if `str` ends with `/`

## Example

```js
const hasTrailingSlashes = require('has-trailing-slash');

expect(hasTrailingSlashes('http://google.com/')).to.be.true;
```

## License

MIT
