# Vite 自動和手動安裝 ESlint

## Vite 自動安裝 `ESLint` 和 `Prettier`

`pnpm create vue@latest`

### ESLint

#### 常見問題

執行 `prettier --write .` 前,使用 `pnpm dev` eslint 會出現以下畫面,這是換行 CRLF(windows) 和 LF(linux) 的問題

```sh
warning  Delete `␍`   prettier/prettier
```

`.eslintrc.cjs` 或 `.eslintrc.js` 加上 `endOfLine: 'auto'`

```javascript
rules:{
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
}
```

遇到 `Eslint` 檢查出現要將單引號改成雙引號可在 `.prettierrc.json` 設定允許單引號

```sh
error Replace `'vue'` with `"vue";`              prettier/prettier
```

```json
{
  "singleQuote": true
}
```

`Eslint` 出現需要結尾加分號,可開啟 `prettier extension` 在 `ctrl + s` 存檔會自動加

```sh
  error  Insert `;`  prettier/prettier
  error  Insert `;`  prettier/prettier
  error  Insert `;`  prettier/prettier
```

`ESlint` 檢查出現以下情況,可用 `prettier extension` 協助 format

```sh
  error  Delete `␍⏎␍⏎··`                                prettier/prettier
  error  Delete `·`                                       prettier/prettier
  error  Replace `␍⏎␍⏎····return·{}` with `return·{};`  prettier/prettier
  error  Insert `,`                                       prettier/prettier
  error  Insert `;`                                       prettier/prettier
  error  Replace `␍⏎␍⏎</style>` with `</style>␍⏎`     prettier/prettier
```

#### 補充

workspace `settings.json` 新增以下內容

如果格式不對存檔使用 `eslint` 規則修復問題,有配置 `prettierrc.json` 時 `eslint` 也會參考,另外專案有裝 `vite-plugin-eslint` 也不影響 `eslint extension` 的檢查

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

#### 完整設定

```javascript
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
```

### 參考資料

[Why do I keep getting Delete 'cr' [prettier/prettier]?](https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-delete-cr-prettier-prettier)\
[Using eslint:recommended](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended)\
[Configuring ESLint](https://eslint.org/docs/latest/user-guide/configuring/)

## Vite 手動安裝 `ESLint` 和 `Prettier`

執行 `pnpm i -D eslint @vue/eslint-config-prettier eslint-plugin-vue prettier`

### ESLint

如果將已配置的註解 `eslint-env node ` 拿掉會報錯

```javascript
/* eslint-env node */ => 拿掉註解
require('@rushstack/eslint-patch/modern-module-resolution');
=> 出現 `'require' is not defined. eslint`


=> 出現 ` 'module' is not defined. eslint`
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};

```

處理有兩種方式

加上 `eslint-env node` 註解

`.eslintrc.cjs` 或 `.eslintrc.js` 或 `package.json` 配置以下內容 , 就能啟用 node 環境

```javascript
{
  env: {
    node: true,
  },
}
```

#### 補充

- `ecmaVersion` 指定 ECMAScript 允許的版本
- `root` 設定是否從根目錄尋找
- `package.json` 也可設定 `eslint` 規則,只要增加 `eslintConfig`

#### 完整設定

```javascript
module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
```

#### 參考資料

[Configuring ESLint](https://eslint.org/docs/latest/user-guide/configuring#specifying-environments)\
[Using configuration comments](https://eslint.org/docs/latest/user-guide/configuring/language-options#using-configuration-comments)\
[Configuring ESLint 中文](https://eslint.bootcss.com/docs/user-guide/configuring)
