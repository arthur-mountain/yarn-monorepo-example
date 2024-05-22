import { type Configuration } from "webpack";
import { argv } from "node:process";

const modeIndex = argv.indexOf("--mode");

const isProd =
  modeIndex === -1
    ? process.env.NODE_ENV === "production"
    : argv[modeIndex + 1] === "production";

const config: Configuration = {
  entry: {
    index: "./index",
  },
  output: {
    clean: true,
  },
  mode: isProd ? "production" : "development",
  // devtool: isProd ? "source-map" : "eval",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    sideEffects: false,
    minimize: isProd,
  },
};

export default config;
