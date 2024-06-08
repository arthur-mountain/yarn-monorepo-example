import type { Configuration } from "webpack";
import baseConfig from "./webpack.base";
import path from "node:path";

const resovle = (outputPath: string) => {
  return path.join(__dirname, "..", outputPath);
};

// TODO: check the externals does not build the dependencies to bundle
const esmConfig: Configuration = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: resovle("dist/esm"),
    filename: "[name].js",
    libraryTarget: "module",
    module: true,
    environment: {
      module: true,
      dynamicImport: true,
    },
  },
  experiments: {
    outputModule: true,
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};

export default esmConfig;
