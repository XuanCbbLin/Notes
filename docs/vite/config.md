# vite.config.js 設定

## build options

### build.rollupOptions

- entryFileNames : 修改 同步 js 打包後路徑和名稱,預設 [name].js

  例如設定:

  ```javascript
  entryFileNames: `test/[name].js`;
  ```

  打包後會顯示在 dist/test/index.js

- chunkFileNames : 異步 js 打包後路徑和名稱,預設 [name].js

  entryFileNames 和 chunkFileNames 設定

  ```javascript
    rollupOptions: {
    output: {
      entryFileNames: `[name].js`,
      chunkFileNames: `[name].js`,
      },
    },
  ```

- assetFileNames : 靜態檔案輸出的名稱,例如圖片和 css

```javascript
assetFileNames: (chunkInfo) => {
          const fileExtName = chunkInfo.name.split('.')[chunkInfo.name.split('.').length - 1];
          let outputFile = '';

          switch (fileExtName) {
            case 'css':
              outputFile = `[name].[ext]`; /*或 outputFile = `[name][extname]`;*/
              break;
            case 'png':
              outputFile = `images/[name].[ext]`;
              break;
          }

          return outputFile;
        },
```

### build.assetsInlineLimit

當圖片放 src/assets 時控制圖片大小是否大於設定的值,大於設定值 build 值會輸出圖片,小於設定值不會輸出圖片

```javascript
return {
  build: {
    assetsInlineLimit: 0,
  },
};
```

## Shared Options

### base

設定開發和打包的路徑

```javascript
// 根據目前執行環境拿到測試機或正式機路徑
const getDomainPath = () => {
  let outPath = '';

  if (command !== 'serve') {
    const domain = mode === 'production' ? 'main' : 'main-t';
    outPath = `https://${domain}/`;
  }

  return outPath;
};

return {
  ...略,
  // 修改 build 時產出的路徑
  base: getDomainPath(),
};
```

## server options

### server.proxy

```javascript
{
 server: {
    // https: true,
    proxy: {
      "/api": {
        target: "https://test/api/", /* 或新增 https: true */
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
}

```

## 完整程式碼

```javascript
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command, mode }) => {
  // 根據目前執行環境拿到測試機或正式機路徑
  const getDomainPath = () => {
    let outPath = '';

    if (command !== 'serve') {
      const domain = mode === 'production' ? 'main' : 'main-t';
      outPath = `https://${domain}/`;
    }

    return outPath;
  };

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
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name]-[hash].js`,
          // 設定輸出的檔案名稱
          assetFileNames: chunkInfo => {
            const fileExtName = chunkInfo.name.split('.')[chunkInfo.name.split('.').length - 1];
            let outputFile = '';

            switch (fileExtName) {
              case 'css':
                outputFile = `[name][extname]`;
                break;
              case 'png':
              case 'jpg':
                outputFile = `images/[name].[ext]`;
                break;
            }
            return outputFile;
          },
        },
      },
      // 設定圖片放 src/assets 時大於0就產出實體圖
      assetsInlineLimit: 0,
    },
    server: {
      // https: true,
      proxy: {
        '/api': {
          target: 'https://test/api/' /* 或新增 https: true */,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    // 修改 build 時產出的路徑
    base: getDomainPath(),
  };
});
```

## 參考資料

[Build Options](https://vitejs.dev/config/build-options.html#build-options)\
[output.assetFileNames](https://rollupjs.org/guide/en/#outputassetfilenames)\
[Vite 配置代理 Proxy，避免跨域和重复编写 url 的问题](https://zxuqian.cn/vite-proxy-config/)\
[server.proxy](https://vitejs.dev/config/server-options.html#server-proxy)\
[How to configure proxy in Vite?](https://stackoverflow.com/questions/64677212/how-to-configure-proxy-in-vite)\
[vite 使用指南](https://baixiaoyu2997-github-io.vercel.app/posts/2021/06/05/vite%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97.html#entryfilenames)\
[Vite 实践：Vue 旧项目迁移](https://juejin.cn/post/7038883564422692901#heading-7)\
[vite 的项目，使用 rollup 打包的方法](https://juejin.cn/post/7036207262414667790)\
[output(输出)](https://juejin.cn/post/7128757418166583326)\
[build.assetsInlineLimit](https://vitejs.dev/config/build-options.html#build-assetsinlinelimit)\
[HackMD 筆記](https://hackmd.io/nXtSyfG0StObLaPW4pS0DA#vite-%E7%9A%84-assetsInlineLimit-%E8%A8%AD%E8%A8%88)\
[base](https://vitejs.dev/config/shared-options.html#base)\
[Conditional Config](https://vitejs.dev/config/#conditional-config)\
[output.entryFileNames](https://rollupjs.org/guide/en/#outputentryfilenames)\
