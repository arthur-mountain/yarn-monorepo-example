import type { Configuration } from "webpack";
import baseConfig from "./webpack.base";
import path from "node:path";

const resovle = (outputPath: string) => {
  return path.join(__dirname, "..", outputPath);
};

// TODO: check the externals does not build the dependencies to bundle
const cjsConfig: Configuration = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: resovle("dist/cjs"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
};

export default cjsConfig;
