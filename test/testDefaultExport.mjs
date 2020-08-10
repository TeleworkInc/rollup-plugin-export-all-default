/**
 * @license MIT
 */
/**
 * @fileoverview
 * Check that all named exports are set on the default export if not manually
 * specified.
 */

import ava from 'ava';
import testDefaultExport from '../build/testDefaultExport.mjs';
import {
  inlineNamedExport,
  namedExport1,
  namedExport2,
} from '../build/testDefaultExport.mjs';

ava('do not modify if manual default export provided', async (t) => {
  t.deepEqual(
      testDefaultExport,
      {
        inlineNamedExport,
        namedExport1,
        namedExport2,
      });
});
