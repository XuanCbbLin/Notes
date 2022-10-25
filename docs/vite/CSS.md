# CSS

## CSS Modules

css 檔名加上 .module.css 就可以以模組方式匯出

例如 src 底下新增 example.module.css , 在 main.js 匯入模組

main.js

```javascript
import classes from './example.module.css';

createApp({
  setup() {
    console.log(classes);
  },
}).mount('#app');
```

如果要單獨匯入某個 class 名稱, 例如 example.module.css 的 .applyColor , 也可以用解構方式匯進來

```javascript
import { applyColor } from './example.module.css';

createApp({
  setup() {
    console.log(applyColor);
  },
}).mount('#app');
```

## CSS Pre-processors

### Disabling CSS injection into the page

如果要將某個 css 模組禁止匯入可加上 ?inline

```javascript
import classes from './example.module.css?inline';

document.getElementById('h1').className = classes.red;
```

## 參考資料

[Disabling CSS injection into the page](https://vitejs.dev/guide/features.html#disabling-css-injection-into-the-page)\
[CSS Modules](https://vitejs.dev/guide/features.html#css-modules)
