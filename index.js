/**
 * @license MIT
 *
 * @fileoverview
 * A plugin which allows for the import of all named exports as the default
 * export for a Rollup output module.
 */

/**
 * If there is no `default` export, add an `export default { ... }` statement to
 * expose all named exports so that `import pkg from 'pkg'` imports all exports,
 * rather than needing to use `import * as pkg from 'pkg'`.
 *
 * @return {object} config
 */
const addDefaultExportStatement = () => ({
  name: 'exportAllDefault',
  renderChunk: async (code, chunk) =>
    !chunk.exports.includes('default')
      ? `${code}\nexport default { ${chunk.exports.join(', ')} };`
      : null,
});

module.exports = addDefaultExportStatement;
