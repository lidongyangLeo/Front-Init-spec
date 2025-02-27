module.exports = {
  extends: ["./index"].map(require.resolve),
  rules: {
    // 双引号
    quotes: ["error", "double", { avoidEscape: true }],
  },
};
