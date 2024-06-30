import path from "node:path";
import fs from "node:fs";
import { spawn } from "node:child_process";
import { getRootWorkspace, getArgs } from "#utils";

const run = () => {
  const args = getArgs();
  if (!args.length) {
    console.error(
      "Please provide args one of (build | build:umd | build:esm | build:cjs | build:types)",
    );
    process.exit(1);
  }

  const componentWorkspaceName = JSON.parse(
    fs.readFileSync(
      path.join(getRootWorkspace(), "shared/components", "package.json"),
      "utf-8",
    ),
  ).name;

  spawn("yarn", ["workspace", componentWorkspaceName, args[0]]).on(
    "close",
    function (code) {
      if (code !== 0) {
        console.error("failed");
        process.exit(code);
      } else {
        console.log("passed");
      }
    },
  );
};

run();
