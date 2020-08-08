/**
 * @license MIT
 *
 * @fileoverview
 * Check that `import pkg` == `import * as pkg`.
 */

import test from 'ava';

import testDefault from '../build/testNamedExports.mjs';
import {
  inlineNamedExport,
  namedExport1,
  namedExport2,
} from '../build/testNamedExports.mjs';

test('default export should be equal to all named exports', async (t) => {
  t.deepEqual(testDefault, { inlineNamedExport, namedExport1, namedExport2 });
});
