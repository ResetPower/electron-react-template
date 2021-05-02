const path = require("path");
const fs = require("fs");

fs.writeFileSync("./dist/index.html", fs.readFileSync("./public/index.html"));

module.exports = [
  {
    entry: {
      main: "./src/main/main.ts",
    },
    target: "electron-main",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.(js|ts)?$/,
          exclude: /node_modules/,
          loader: "ts-loader",
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts"],
    },
    output: {
      path: path.join(__dirname, "../dist"),
      filename: "main.js",
    },
  },
  {
    entry: {
      app: "./src/renderer/index.ts",
    },
    target: "electron-renderer",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)?$/,
          exclude: /node_modules/,
          loader: "ts-loader",
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
          },
        },
      },
    },
    output: {
      path: path.join(__dirname, "../dist"),
      filename: "[name].js",
    },
  },
];
