'use strict';

const useRequest = require('..');
const assert = require('assert').strict;

assert.strictEqual(useRequest(), 'Hello from useRequest');
console.info("useRequest tests passed");
