# Multi-Page App

## 設定方式和目錄結構

### 目錄結構

```javascript
├── package.json
├── vite.config.js
├── index.html
├── main.js
└── pages
    ├── page
    ├   ├── index.html
    ├   └──  nested.js
    ├── page
       ├── index.html
       └──  nested.js
```

### 設定方式

- import { resolve } from 'path'
- build.rollupOptions.input 設定多頁入口

預設入口點在

```javascript
main: resolve(__dirname, 'index.html');
```

vite.config.js

```javascript
export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          page: resolve(__dirname, './src/pages/page/index.html'),
          page2: resolve(__dirname, './src/pages/page2/index.html'),
        },
      },
    },
  };
});
```

### pnpm build 的 js 檔案

- vue.esm-bundler-6edfb654.js
  此檔案可透過 chunkFileNames 修改檔名和移除 hash

- 其他 js 檔案 entryFileNames 修改檔名和移除 hash

## 參考資料

[Multi-Page App](https://vitejs.dev/guide/build.html#multi-page-app)\
[【vite】配置 vite 打包入口](https://blog.csdn.net/weixin_39370093/article/details/119120158)

## 補充

執行 pnpm dev 時出現以下訊息

```javascript
option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
```

可在 vite.config.js 的 resolve 新增以下配置

```javascript
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
```

參考資料:

[vue 不支持运行时编译](https://blog.csdn.net/a1647010108/article/details/126075908)

## 完整程式碼

```javascript
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          page: resolve(__dirname, './src/pages/page/index.html'),
          page2: resolve(__dirname, './src/pages/page2/index.html'),
        },
      },
    },
  };
});
```
