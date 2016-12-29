# has-trailing-slash

Checks if a string has a trailing slash

## Installation

with [npm](https://npmjs.org/):

    $ npm install has-trailing-slash

## API

### `hasTrailingSlash(str)`

Checks if `str` ends with `/`

## Example

```js
var hasTrailingSlashes = require('has-trailing-slash')

expect(hasTrailingSlashes('http://google.com/')).to.be.true;
```

## License

MIT
