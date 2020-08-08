# Export all as `default`
This is a Rollup plugin which will export all named exports as `default` if no
`default` export is specified. This makes it easy to do `import pkg from 'pkg'`
rather than `import * as pkg from 'pkg'`, while still allowing named imports
like `import { myNamedExport } from 'pkg'`.

Consider:

`lib/testNamedExports.mjs`
```javascript
const namedExport1 = 42;
const namedExport2 = 1.6180339887498948482;

export const inlineNamedExport = {
  foo: 'bar',
  fizz: 'buzz',
};

export {
  namedExport1,
  namedExport2,
};
```

`test/testNamedExports.js`
```javascript
import testDefault from '../build/testNamedExports.mjs';
console.log(testDefault);

// prints
{
  inlineNamedExport: { foo: 'bar', fizz: 'buzz' },
  namedExport1: 42,
  namedExport2: 1.618033988749895
}
```

`lib/testManualDefault.mjs`
```javascript
export const Test = 'Hello world';
export default 42;
```

`test/testManualDefault.mjs`
```javascript
import testManualDefault from '../build/testManualDefault.mjs';
console.log(testManualDefault);

// prints
42
```

This is done by adding an `export default { ... }` statement following the
generated `export { ... }` statement, i.e.:

```javascript
// generated by Rollup for output.format = 'esm'
export { namedExport1, namedExport2, namedExport3 };

// added by this plugin:
export default { namedExport1, namedExport2, namedExport3 };
```