# unplugin-icons

## 配置方式

### install

- pnpm i -D @iconify/json 下載 icon 資料
- pnpm i -D unplugin-icons
- pnpm i -D unplugin-vue-components 讓元件不需要 import 就能使用

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

### options

#### Name Conversion

icon 元件預設是以 `i` 為開頭引入例如

```html
<i-charm-shield-tick />
```

可以自定義開頭

```javascript
export default defineConfig({
  plugins: [
    Components({
      resolvers: IconsResolver({ prefix: 'icon' }),
    }),
  ],
});
```

就可以開頭以 `icon`引入 icon 元件

```html
<icon-charm-shield-tick />
```

## 參考資料

[unplugin-icons](https://github.com/antfu/unplugin-icons)\
[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#migrate-from-vite-plugin-components) \
[icones](https://icones.js.org/collection/all?s=tick)
