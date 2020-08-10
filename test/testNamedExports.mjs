/**
 * @license MIT
 *
 * @fileoverview
 * Check that `import pkg` == `import * as pkg`.
 */

import ava from 'ava';

import testNamedExports from '../build/testNamedExports.mjs';
import {
  inlineNamedExport,
  namedExport1,
  namedExport2,
} from '../build/testNamedExports.mjs';

ava('default export should be equal to all named exports', async (t) => {
  t.deepEqual(
      testNamedExports,
      {
        inlineNamedExport,
        namedExport1,
        namedExport2,
      },
  );
});
