# ESlint 不設定 Prettier 配置

測試 ESlint 不配 prettier 時的優缺點,目前設定以下內容 `ESlint`能夠自動修復

- 新增結尾
- 縮排格數
- 箭頭函數單個參數是否加括號
- 單雙引號的設定

## config

`settings.json`

```javascript
{
     "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
      },
}
```

`.eslintrc.cjs`

```javascript
{
       rules:{
        'semi': ["error", "always"],
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'arrow-parens': ['error', 'as-needed'],
    }
}
```

如果要像 `prettier` 設定 `printWidth`, `eslint` 能夠設定 `max-len` 限制寬度,但沒辦法自動修復

`.eslintrc.cjs`

```javascript
{
      rules:{
        'max-len': ['error', { 'code': 80 }],
    }
}
```

## 參考資料

[ESlint 文件](https://eslint.org/docs/latest/user-guide/getting-started)\
[Why I don't use Prettier](https://antfu.me/posts/why-not-prettier)\
[@antfu/eslint-config](https://www.npmjs.com/package/@antfu/eslint-config)
