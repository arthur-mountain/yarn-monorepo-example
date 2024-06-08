import { type Configuration, Compiler } from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { argv } from "node:process";
import { join } from "node:path";
import { spawn } from "node:child_process";
import { name, scripts } from "../package.json";

const modeIndex = argv.indexOf("--mode");

const resovleRootDir = (outputPath: string) => {
  console.log("__dirname: ", __dirname);
  return join(__dirname, "..", outputPath);
};

const isProd =
  modeIndex === -1
    ? process.env.NODE_ENV === "production"
    : argv[modeIndex + 1] === "production";

const baseConfig: Configuration = {
  entry: {
    index: resovleRootDir("core/index"),
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
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            configFile: resovleRootDir("tsconfig.json"),
          },
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    {
      apply: (compiler: Compiler) => {
        compiler.hooks.done.tap("PostBuildPlugin", () => {
          const command = "build:types";
          if (!scripts[command]) {
            console.error(
              "\x1b[31mNo build:types script found in package.json",
            );
            return;
          }

          const buildTypes = spawn("yarn", ["workspace", name, command]);

          buildTypes.stderr.on("data", (data) => {
            console.error(`\x1b[31mbuild types error: ${data}`);
          });

          buildTypes.on("close", (code) => {
            if (code === 0) console.log("\x1b[32mBuild types successfully\n");
          });
        });
      },
    },
  ],
  optimization: {
    sideEffects: false,
    minimize: isProd,
  },
  watchOptions: {
    aggregateTimeout: 300, // Delay the rebuilt after 300ms
    poll: 3000, // Check for changes every second
    ignored: /node_modules/,
  },
};

export default baseConfig;
