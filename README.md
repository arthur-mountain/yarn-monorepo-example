# yarn-monorepo-example

The monorepo example with yarn

# Commands

##### Title: Add dependency in workspace

- `yarn workspace <workspaceName> add <dependency>`

  - e.g. yarn workspace @yarn-monorepo-example/package-a add lodash

- `yarn workspace <workspaceName> remove <dependency>`

  - e.g. yarn workspace @yarn-monorepo-example/package-a remove lodash

- `cd <yourPackageDirectory> && yarn add <dependency>`

  - e.g. cd packages/project-a && yarn add lodash

---

##### Title: Add workspace as dependency in another workspace

Note: version is required

- `yarn workspace <workspaceName> add $<workspaceDependency>@<version>`
  - e.g. yarn workspace @yarn-monorepo-example/package-a add @yarn-monorepo-example/package-b@0.0.1

---

##### Title: Run command in workspace

- `yarn workspace <workspaceName> <command>`
  - e.g. yarn workspace @yarn-monorepo-example/package-a start

---

##### Title: Run command in all workspaces

- `yarn workspace run <command>`
  - e.g. yarn workspace run start

---

##### Title: Check info of workspace

- `yarn workspace info`

# Dependencies

1. All dependencies are managed in the root node_modules.

2. If any duplicate dependencies are found, the ones in the root node_modules will be used instead of installing the duplicate dependency again.

3. If a dependency should not be hoisted, we can use the `nohoist` option in the `package.json` file.

   For example, specify `nohoist` for normalize-scss and lodash so that they are installed in each package even if the versions are the same.

   ```package.json
   {
     "workspaces": {
       // Define the packages
       "packages": [
         "packages/*"
       ],
       // Define the nohoist packages
       "nohoist": [
         "**/normalize-scss",
         "**/lodash/**"
       ]
     }
   }
   ```
