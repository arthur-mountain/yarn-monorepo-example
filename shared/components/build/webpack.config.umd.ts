import type { Configuration } from "webpack";
import baseConfig from "./webpack.base";
import path from "node:path";

const resovle = (outputPath: string) => {
  return path.join(__dirname, "..", outputPath);
};

// TODO: check the externals does not build the dependencies to bundle
const umdConfig: Configuration = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: resovle("dist/umd"),
    filename: "[name].js",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};

export default umdConfig;
