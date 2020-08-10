/**
 * @license MIT
 *
 * @fileoverview
 * Test Rollup config which will generate an example output in build/.
 */

const glob = require('glob');

const exportAllDefault = require('.');
const filesToBundle = glob.sync('./lib/**.mjs');

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
