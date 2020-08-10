/**
 * @license MIT
 *
 * @fileoverview
 * A file which only makes named exports, and will have a default export
 * injected by the plugin.
 */

const namedExport1 = 42;
const namedExport2 = 1.6180339887498948482;

const inlineNamedExport = {
  foo: 'bar',
  fizz: 'buzz',
};

export { inlineNamedExport, namedExport1, namedExport2 };
export default { inlineNamedExport, namedExport1, namedExport2 };
