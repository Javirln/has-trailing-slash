'use strict';

/**
 * Checks if a string has a trailing slash
 * @param str String to check
 * @returns {boolean} true if the @param ends with /
 */
module.exports = (str) => {
    if (typeof str !== 'string' || str == null) {
        throw TypeError('Expected a string');
    } else {
        return str.charAt(str.length - 1) == '/';
    }
};