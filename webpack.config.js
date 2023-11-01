const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    index: "./index.js",
    admin: "./admin.js",
  },
  output: {
    filename: "js/[name].main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    static: {
      directory: "./dist",
      watch: true,
    },
  },
};
