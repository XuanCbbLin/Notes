# vue cli 手動裝 `ESLint`

## 使用 pnpm 安装 vue create 報錯

```sh
Error: command failed: pnpm install --reporter silent --shamefully-hoist
```

current node version v16.14.2 pnpm 7.3.0

- 降版方式

  - `npm rm -g pnpm`
  - `npm install -g pnpm@6.34.0`

- 不降版方式

因為一開始選擇 npm / yarn / pnpm 時,後面安裝會自動用 pnpm , 如果不想用固定的方式,可用以下修改

改用 vue create `<projectName> -m <npm / yarn>` 指定安裝的命令
vue cli 初始後 , eslint 會配置在 package.json 的 eslintConfig 可拉出去抽出去獨立 `.eslintrc.js`

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {},
};
```

### 參考資料

[使用 pnpm 安装 vue create 報錯](https://github.com/vuejs/vue-cli/issues/7284)

## `eslint` 檢查需要換行

```sh
Replace
`"plugin:vue/vue3-essential",
·"eslint:recommended",
·"plugin:prettier/recommended"`

with

`␍⏎····"plugin:vue/vue3-essential",
␍⏎····"eslint:recommended",
␍⏎····"plugin:prettier/recommended",␍⏎··`
```

解決 2 個方法

`eslintrc.js` 設定 `printWidth`,但不會協助換行

```javascript
{
   rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
      },
    ],
  },
}
```

或是

`.prettierrc.json` 設定 `printWidth`

## 設定 ` "source.fixAll.eslint"`

不開 `prettier extensions` ,新增 `setting.json` 設定 ` "source.fixAll.eslint": true` 讓 `eslint` 修正錯誤,但是如果是以下狀況,就還是要開 `prettier extensions` 處理

```sh
Replace
`"plugin:vue/vue3-essential",
·"eslint:recommended",
·"plugin:prettier/recommended"`

with

`␍⏎····"plugin:vue/vue3-essential",
␍⏎····"eslint:recommended",
␍⏎····"plugin:prettier/recommended",␍⏎··`
```

## 關掉 `eslint` 跑 yarn serve 出現 `error Delete `,` prettier/prettier` 和 `error Delete ␍⏎ `

```javascript
 rules: {
    "import/no-named-as-default": 0, //  error  Delete `,`  prettier/prettier
    "import/no-named-as-default-member": 0, //  error  Delete `,`  prettier/prettier
  },
```

[Delete `,` prettier/prettier and Parse errors in imported module './routes'](https://stackoverflow.com/questions/70646554/delete-prettier-prettier-and-parse-errors-in-imported-module-routes)

但開專案會統一每個人的設定,如果規定裝 `eslint extensions` 不會有 `error Delete `,` prettier/prettier` 的問題 , 但 `error Delete ␍⏎ ` 還是存在以下配置處理

```javascript
 rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: 'auto', // error  Delete `␍⏎ `
      },
    ],
  },
```

## 完整配置

`.eslintrc.js`

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
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
