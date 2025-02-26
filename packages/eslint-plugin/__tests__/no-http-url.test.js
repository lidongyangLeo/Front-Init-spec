"use strict";

const { JsxEmit } = require("typescript");
const rule = require("../rules/no-http-url");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester();

ruleTester.run("no-http-url", rule, {
  valid: [
    {
      code: "var test = 'https://example.com';",
    },
  ],
  invalid: [
    {
      code: "var test = 'http://example.com';",
      output: "var test = 'http://example.com';",
      errors: [
        {
          message: 'Recommended "http://example.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://example.com' />",
      output: "<img src='http://example.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://example.com" switch to HTTPS',
        },
      ],
    },
  ],
});
