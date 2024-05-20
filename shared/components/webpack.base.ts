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
    // library: "@yarn-monorepo-example/components",
    clean: true,
  },
  mode: isProd ? "production" : "development",
  // devtool: isProd ? "source-map" : "eval",
  resolve: {
    alias: {
      "react-native$": "react-native-web",
    },
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
          options: {
            presets: ["module:metro-react-native-babel-preset"],
            plugins: ["react-native-web"],
          },
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
