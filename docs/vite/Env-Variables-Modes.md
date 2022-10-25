# Env Variables and Modes

## Env Variables

### Env Variables 圖表

Vite 提供 import.meta.env 物件可查看目前環境的狀況

```javascript
BASE_URL: '/';
DEV: true;
MODE: 'development';
PROD: false;
SSR: false;
```

- import.meta.env.MODE: {string} 運行模式。

- import.meta.env.BASE_URL : {string} 執行 build 時設定的 URL。他由 base 配置决定。

- import.meta.env.PROD: {boolean} 是否在生產環境(production)。

- import.meta.env.DEV: {boolean} 是否在開發環境 (與 import.meta.env.PROD 相反)。

- import.meta.env.SSR: {boolean} 是否在 server 上

## env Files

除了使用 import.meta.env 環境變量外,可建立 .env 檔案設定額外變量

```javascript
.env                # 任何環境都載入
.env.local          # 任何環境都載入,但 git 會忽略
.env.[mode]         # 只在設定的環境模式載入
.env.[mode].local   # 只在設定的環境模式載入, git 會忽略
```

### .env 檔案設定

例如新增 .env 檔案

.env

```javascript
VITE_some_key = 123;
DB_PASSWORD = foobar;
```

引入 import.meta.env 或 import.meta.env.VITE_some_key,就可看到設定的 VITE_some_key

main.js

```javascript
console.log(import.meta.env);
```

```javascript
BASE_URL: '/';
DEV: true;
MODE: 'development';
PROD: false;
SSR: false;
VITE_some_key: '123';
```

補充: .env 檔案需要設定 VITE 前綴才能看到設定的變量,因為 DB_PASSWORD = foobar 沒有加 VITE 前綴,使用 import.meta.env 會看不到變量

### .env.[mode]

例如只想在 production 模式載入檔案,可新增 .env.production , 在 development 就不會出現 VITE_some_key2

.env.production

```javascript
VITE_some_key2 = 123;
DB_PASSWORD = foobar;
```

main.js

```javascript
console.log(import.meta.env);
```

```javascript
BASE_URL: '/';
DEV: true;
MODE: 'development';
PROD: false;
SSR: false;
VITE_some_key: '123';
```

## Modes

執行 build 時可修改目前的環境

### package.json 設定修改模式

```javascript
 "scripts": {
    "dev": "vite",
    "build:prod": "vite build --mode production",
    "build:dev":"vite build --mode development",
    "preview": "vite preview --port 4173"
  },
```

## 參考資料

[Modes](https://vitejs.dev/guide/env-and-mode.html#modes)\
[Env Variables](https://vitejs.dev/guide/env-and-mode.html#env-variables)\
[.env Files](https://vitejs.dev/guide/env-and-mode.html#env-files)
