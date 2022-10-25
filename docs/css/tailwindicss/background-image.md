# background-image 與 vite 的 base url

## 無法動態產生連結

動態產生 url 在 tailwind css 不允許

```javascript
<template>
  <div class="h-36 w-36" :class="`bg-[url(${getImg()})]`"></div>
</template>

<script setup>
const getImg = () => {
  return "./assets/xuan.jpg";
};
</script>
```

## 靜態設定連結

vite 有設定 base url 連結假如是 `/test`,執行 pnpm build 會自動套 base url

```javascript
<div class="h-36 w-36 bg-[url('./assets/xuan.jpg')]"></div>
```

執行 build

```javascript
background-image:url(/test/assets/xuan.12e268fa.jpg)
```

## 寫 class name

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

- 無法動態設定連結,但可以靜態或寫 class name
- 靜態或直接寫 class name 都可以套 base url

## 參考資料

[Dynamically build classnames in TailwindCss](https://stackoverflow.com/questions/69687530/dynamically-build-classnames-in-tailwindcss)

[Dynamic class names](https://tailwindcss.com/docs/content-configuration#dynamic-class-names)
