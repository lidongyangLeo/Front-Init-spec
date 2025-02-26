# `fe-project-eslint-plugin`

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install fe-project-eslint-plugin eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ["fe-project-eslint-config"],
  rules: {
    "fe-project-eslint-config/no-secret-info": "error",
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: "plugin:fe-project-eslint-config/recommended",
};
```
