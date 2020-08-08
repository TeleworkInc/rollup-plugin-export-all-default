/**
 * @license MIT
 *
 * @fileoverview
 * Test Rollup config which will generate an example output in build/.
 */

const exportAllDefault = require('.');
const filesToBundle = [
  './lib/testNamedExports.mjs',
  './lib/testManualDefault.mjs',
];

module.exports = filesToBundle.map(
    (file) => ({
      input: file,
      output: {
        file: file.replace('./lib/', './build/'),
        format: 'esm',
        preferConst: true,
      },
      plugins: [
        exportAllDefault(),
      ],
    }),
);
