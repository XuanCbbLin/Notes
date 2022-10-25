# UnoCSS

## Installation

`pnpm i -D unocss`

`vite.config.js`

```javascript
import Unocss from 'unocss/vite';

export default defineConfig({
  plugins: [Unocss()],
});
```

`main.js`

```
import 'uno.css'
```

## Configurations

### Custom Rules

`vite.config.js`

#### Static Rules

靜態修改規則

```javascript
export default defineConfig({
  plugins: [
    Unocss({
      rules: [['m-1', { margin: '0.25rem' }]],
    }),
  ],
});
```

#### Dynamic Rules

如果需要動態的設定規則可用 `RegExp`

`vite.config.js`

```javascript
export default defineConfig(() => ({
  plugins: [
    Unocss({
      rules: [
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
        [/^p-(\d+)$/, (match) => ({ padding: `${match[1] / 4}rem` })],
      ],
    }),
  ],
}));
```

### Extend Theme

新增 `theme` 可客製主題,例如設定 `breakpoint`

`vite.config.js`

```javascript
export default defineConfig(() => ({
  plugins: [
    Unocss({
      theme: {
        // ...
        breakpoints: {
          sm: '320px',
          md: '640px',
        },
      },
    }),
  ],
}));
```

### Style Resetting

UnoCSS 沒有提供樣式重置，但可以 install `@unocss/reset`,選擇引入 reset css 檔案

`pnpm i @unocss/reset`

`main.js`

```javascript
// normalize.css
import '@unocss/reset/normalize.css';
// reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
import '@unocss/reset/eric-meyer.css';
// preflights from tailwind
import '@unocss/reset/tailwind.css';
```

## sort class

設定樣式排序

- install `WindiCSS IntelliSense extension`
- settings.json add `"windicss.sortOnSave": true`

## Reference

[UnoCSS](https://github.com/unocss/unocss#static-rules)
