/**
 * @license MIT
 *
 * @fileoverview
 * Check that manual `export default` statements will be respected.
 */

import test from 'ava';
import testManualDefault from '../build/testManualDefault.mjs';

test('do not modify if manual default export provided', async (t) => {
  t.is(testManualDefault, 42);
});
