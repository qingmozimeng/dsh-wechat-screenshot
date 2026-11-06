'use strict';

function isAllowedOrigin(value, expectedOrigin) {
  try {
    const actual = new URL(value);
    if (!['http:', 'https:'].includes(actual.protocol)) return false;
    if (expectedOrigin !== undefined) {
      const expected = new URL(expectedOrigin);
      return expected.origin !== 'null' && actual.origin === expected.origin;
    }
    return ['127.0.0.1', 'localhost', '[::1]'].includes(actual.hostname);
  } catch {
    return false;
  }
}

module.exports = { isAllowedOrigin };
