const expect = require('chai').expect;
const hasTrailingSlashes = require('../slashes');

suite('URL Checker', function () {

    test('should pass if the string does not have slashes at the end', function () {

        expect(hasTrailingSlashes('lorem')).to.be.false;
        expect(hasTrailingSlashes('lorem ipsum')).to.be.false;

    });

    test('should pass if the string has leading slashes', function () {

        expect(hasTrailingSlashes('/lorem')).to.be.false;
        expect(hasTrailingSlashes('/lorem ipsum')).to.be.false;

    });

    test('should fail if the string has trailing slashes', function () {

        expect(hasTrailingSlashes('lorem/')).to.be.true;
        expect(hasTrailingSlashes('lorem ipsum//')).to.be.true;

    });
});