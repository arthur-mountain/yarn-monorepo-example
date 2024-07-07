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

---

##### Title: The Command in Workspace That Requires Another Workspace Command to Run First

For Example: If package-a requires package-b to be built first.

1. Using the `pre` option in the package.json file.

```package.json
{
  "name": "@yarn-monorepo-example/package-a",
  "version": "0.0.1",
  "scripts": {
    "prebuild": "yarn workspace @yarn-monorepo-example/package-b build"
    "build":"next build"
  }
}
```

or using the `&&` operator in the script.

```package.json
{
  "name": "@yarn-monorepo-example/package-a",
  "version": "0.0.1",
  "scripts": {
    "build": "yarn workspace @yarn-monorepo-example/package-b build && next build"
  }
}
```

2. Managing Custom Commands in Scripts.

```build.js
const { execSync } = require('child_process');

function buildProject(name) {
  console.log(`Building ${name}...`);
  execSync(`yarn workspace ${name} build`, { stdio: 'inherit' });
}

// Build in order
buildProject('package-a');
buildProject('package-b');
```

Conclusion:
More often, we use monorepo tools like NX, Lerna, Turbo, Rush, Bazel, etc., which can handle this kind of problem.
They also provide features like caching, remote execution, etc.
