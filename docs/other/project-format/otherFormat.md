# 其他 format 設定

## Prettier 設定

根據 `eslint`的限制或是 format 客製設定

```json
{
  "singleQuote": true,
  "printWidth": 110,
  "arrowParens": "avoid",
  "tabWidth": 2
}
```

## 補充

`package.json` 的 `scripts` 可設定 `prettier --write .` 對整個專案的檔案 `format`

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

### 參考資料

[Configuring Prettier](https://prettier.io/docs/en/options.html)\
[prettier install](https://prettier.io/docs/en/install.html)

## Vue

### eslint-plugin-vue

檢查 `.vue` 檔的 `<template>` `<script>` 是否符合 `eslint` 規範

`.eslintrc.cjs` 或 `.eslintrc.js` 配置

```javascript
module.exports = {
  extends: ['plugin:vue/vue3-essential'],
};
```

#### 參考資料

[eslint-plugin-vue](https://eslint.vuejs.org/)\
[风格指南](https://v2.cn.vuejs.org/v2/style-guide/index.html#%E4%BC%98%E5%85%88%E7%BA%A7-A%EF%BC%9A%E5%BF%85%E8%A6%81%E7%9A%84)

### @vue/eslint-config-prettier

關閉 `Eslint` 與 `Prettier` 衝突規則

`.eslintrc.cjs` 或 `.eslintrc.js` 配置,注意將 `@vue/eslint-config-prettier` 放在最後的索引

```js
module.exports = {
  extends: [
    // ... other configs
    '@vue/eslint-config-prettier',
  ],
};
```

#### 參考資料

[@vue/eslint-config-prettier](https://www.npmjs.com/package/@vue/eslint-config-prettier)

## setting.json 設定

專案一開始設定好 `workspace -> setting.json` ,其他人拿到專案後只要下載 `prettier extension` 就不用另外設定 format

```json
{
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Windi CSS sort class

設定 custom class 排序

- install `WindiCSS IntelliSense extension`
- add `workspace settings.json`

`workspace settings.json`

```json
{
  "windicss.sortOnSave": true
}
```

### 參考資料

[Extension Settings](https://windicss.org/editors/vscode.html#extension-settings)

## Tailwind CSS sort class

- install `Tailwind CSS IntelliSense extension`
- `pnpm i install -D prettier prettier-plugin-tailwindcss` 或 `pnpm i install -D prettier-plugin-tailwindcss`

### 參考資料

[Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

## UnoCSS sort class

- install `WindiCSS IntelliSense extension`
- settings.json add `"windicss.sortOnSave": true`

## scss/sass format

使用 compass 建立 scss/sass 會產生 config.rb 設定 scss/sass 編譯出來的 css,以下介紹 format config

`output_style` 設定輸出 css 的格式,可使用 4 種模式

- `:expanded`
- `:nested`
- `:compact`
- `:compressed`

### 參考資料

[介紹 Sass 與 Compass 的 config.rb 設定](https://ithelp.ithome.com.tw/articles/10134963)\
[config.rb Configuration Reference](http://compass-style.org/help/documentation/configuration-reference/)

## 非 node 環境

如果沒有 `prettier.*` 設定 format，為了不影響專案格式問題可用以下方式處理

- vscode prettier.extensions 關閉
- vscode global settings.json "editor.formatOnSave" 設定 false
