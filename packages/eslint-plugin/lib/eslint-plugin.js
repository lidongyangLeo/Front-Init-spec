"use strict";

const path = require("path");
const requireAll = require("require-all");

exports.rules = requireAll({
  dirname: path.resolve(__dirname, "rules"),
});

// module.exports = eslintPlugin;

// function eslintPlugin() {
//   return 'Hello from eslintPlugin';
// }
