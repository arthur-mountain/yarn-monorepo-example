import type { Configuration } from "webpack";
import baseConfig from "./webpack.base";
import path from "node:path";

const esmConfig: Configuration = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: path.resolve(__dirname, "dist/esm"),
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
};

const cjsConfig: Configuration = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: path.resolve(__dirname, "dist/cjs"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
};

const umdConfig: Configuration = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: path.resolve(__dirname, "dist/umd"),
    filename: "[name].js",
    libraryTarget: "umd2",
  },
};

export default ({ target }: { target?: "esm" | "cjs" | "umd" }) => {
  const map = {
    esm: esmConfig,
    cjs: cjsConfig,
    umd: umdConfig,
  } as const;

  if (target && map[target]) return map[target];

  return Object.values(map);
};
