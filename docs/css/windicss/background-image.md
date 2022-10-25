# background-image 與 vite 的 base url

## 無法靜態和動態產生連結

如果要做動態和靜態產生 url 在 WindiCSS 不允許

```javascript
<template>
  <div class="h-36 w-36" :class="`bg-[url(${getImg()})]`"></div> /* 動態 */
  <div class="h-36 w-36 bg-[url('./assets/xuan.jpg')]"></div> /* 靜態 */
</template>

<script setup>
const getImg = () => {
  return "./assets/xuan.jpg";
};
</script>
```

## windi.config.js 設定 background-image

雖然可以設定 background-image 但無法套 base url

windi.config.js

```javascript
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    backgroundImage: {
      xuan: 'url("./src/assets/xuan.jpg")',
    },
  },
});
```

app.vue

```javascript
<div class="h-36 w-36 bg-xuan"></div>
```

## 直接寫 class name

這做法在 build 後會套 base url

```javascript
<template>
  <div class="h-36 w-36 test"></div>
</template>

<style>
.test {
  background-image: url("./assets/xuan.jpg");
}
</style>

```

## 總結

- 無法做動態和靜態連結,在 windi.config.js 設定 backgroundImage 才能用
- 需要套 base url 要直接寫 class name
