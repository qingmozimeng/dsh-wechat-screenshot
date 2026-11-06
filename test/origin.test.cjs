const test = require('node:test');
const assert = require('node:assert/strict');
const { isAllowedOrigin } = require('../native-gpu/origin.cjs');

test('supports loopback DSH on different ports', () => {
  for (const url of ['http://127.0.0.1:3080/chat', 'http://localhost:4873/', 'http://[::1]:4000/']) {
    assert.equal(isAllowedOrigin(url), true, url);
  }
});

test('rejects remote hosts, lookalike hosts, opaque origins and malformed input', () => {
  for (const url of ['https://example.com/', 'http://localhost.evil.test/', 'http://127.0.0.1.evil.test/', 'file:///tmp/page.html', 'data:text/html,hello', 'invalid']) {
    assert.equal(isAllowedOrigin(url), false, url);
  }
});

test('explicit origin also matches the port and scheme', () => {
  assert.equal(isAllowedOrigin('http://localhost:3080/chat', 'http://localhost:3080'), true);
  assert.equal(isAllowedOrigin('http://localhost:4000/chat', 'http://localhost:3080'), false);
  assert.equal(isAllowedOrigin('https://localhost:3080/', 'http://localhost:3080'), false);
  assert.equal(isAllowedOrigin('http://127.0.0.1:3080/', 'http://localhost:3080'), false);
  assert.equal(isAllowedOrigin('file:///anywhere', 'file:///trusted'), false);
});
