# unplugin-icons

## 配置方式

### install

- pnpm i -D @iconify/json
- pnpm i -D unplugin-icons
- pnpm i -D unplugin-vue-components

### config

`vite.config.js`

```javascript
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

export default defineConfig({
  plugins: [
    Components({
      resolvers: IconsResolver(),
    }),
    Icons(),
  ],
});
```

## 參考資料

[unplugin-icons](https://github.com/antfu/unplugin-icons)\
[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#migrate-from-vite-plugin-components)
