### Webpack

1. entry: "string" or "mapping", if using mapping, multiple chunks will be produced.

2. output: Specify "output location", "output filename", "output format (esm, cjs, umd, etc.)", "clear previous output (e.g. dist) before outputting", etc.

3. mode: Specify the environment, `development` or `production`.

4. devtool: Whether to generate sourcemap.

5. resolve: Specify file path, extensions, aliases;

6. module: Specify loader(s)

   - test: Specify filename, string or RegExp
   - exclude: Exclude files
   - use: Specify loader, string or object (can carry options parameter)

7. optimization: Specify whether to directly tree-shaking (sideEffects), and the degree of compression (minimize).

8. webpack.config.js: Can directly output an object or a function (receives env parameter).

---

## TypeScript

1. To generate declaration files only without compiling, you can:
   - outDir: Specify output location
   - declaration: Whether to generate .d.ts files
   - declarationDir: Specify .d.ts files output location
   - declarationMap: Whether to generate .d.ts.map
   - emitDeclarationOnly: Whether to generate declaration files only without compiling.
