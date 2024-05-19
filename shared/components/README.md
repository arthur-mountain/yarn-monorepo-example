### Webpack

1. entry: 「單一字串」or「一個 mapping」, 如果是用 mapping 會產出多個 chunk(s)

2. output: 指定 「輸出位置」、「輸出黨名」、「輸出格式(esm,cjs, umd, etc)」、「輸出前，先清除前一個輸出(e.g. dist)」等

3. mode: 指定環境， `development` or `production`

4. devtool: 是否建立 sourcemap

5. resolve: 指定檔案路徑、副檔名、alias;

6. module: 指定 loader(s)

- test: 指定檔案名稱, string or RegExp
- exclude: 排除檔案
- use: 指定 loader, string or object(可以帶 options 參數)

7. optimization: 指定是否直接 tree-shaking(sideEffects)、是否壓縮程度(minimize)

8. webpack.config.js: 可以直接輸出 object，或是 function(接收 env 參數)

---

## TypeScript

1. 只建立 declaration file，不編譯的話，可以:
   - outDir: 指定輸出位置
   - declaration: 是否產生 .d.ts files
   - declarationDir: 指定 .d.ts files 輸出位置
   - declarationMap: 是否產生 .d.ts.map
   - emitDeclarationOnly: 是否只建立 declaration file，不編譯
