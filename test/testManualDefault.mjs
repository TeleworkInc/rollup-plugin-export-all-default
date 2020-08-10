/**
 * @license MIT
 *
 * @fileoverview
 * Check that manual `export default` statements will be respected.
 */

import ava from 'ava';
import testManualDefault from '../build/testManualDefault.mjs';

ava('do not modify if manual default export provided', async (t) => {
  t.is(testManualDefault, 42);
});
