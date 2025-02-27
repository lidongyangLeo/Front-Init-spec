const assert = require("assert");
const stylelint = require("stylelint");
const path = require("path");

describe("fe-project-stylelint-config", () => {
  it("Validate css-module", async () => {
    const filePaths = [path.join(__dirname, "./fixtures/css-module.scss")];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../lib/stylelint-config.js"),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const fileResult = JSON.parse(result.output || "[]") || [];
      fileResult.forEach((fileResult) => {
        console.log(`======== ${filePaths} =========`);
        console.log(fileResult.warnings);
      });

      assert.ok(fileResult.length === 0);
    }
  });

  it("Validate default", async () => {
    const filePaths = [path.join(__dirname, "./fixtures/index.css")];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../lib/stylelint-config.js"),
      files: filePaths,
      fix: false,
    });
    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || "[]") || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ============`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length === 0);
    }
  });

  it("Validate sass", async () => {
    const filePaths = [path.join(__dirname, "./fixtures/sass-test.scss")];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../lib/stylelint-config.js"),
      files: filePaths,
      fix: false,
    });
    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || "[]") || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ============`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length === 0);
    }
  });

  it("Validate less", async () => {
    const filePaths = [path.join(__dirname, "./fixtures/less-test.less")];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../lib/stylelint-config.js"),
      files: filePaths,
      fix: false,
    });
    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || "[]") || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ============`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length !== 0);
    }
  });
});
