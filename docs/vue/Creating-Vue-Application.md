# Creating a Vue Application

如果要將 template 丟到外面(view) 可用以下設定

index.html

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>learning notes</title>
  </head>
  <body>
    <div id="app">
      <h1>title</h1>
      <button @click="count++">{{ count }}</button>
      // 注意不能用 <ChildComponent />
      <Child-Component></Child-Component>
    </div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

main.js

```javascript
import { createApp } from 'vue';
import ChildComponent from './components/vue/ChildComponent.vue';

createApp({
  components: {
    ChildComponent,
  },
  setup() {
    const count = 0;

    return {
      ChildComponent,
      count,
    };
  },
}).mount('#app');
```

參考資料:
https://vuejs.org/guide/essentials/application.html#mounting-the-app

https://vuejs.org/api/application.html#createapp

https://book.vue.tw/CH2/2-1-components.html#%E5%85%83%E4%BB%B6%E7%9A%84%E5%AE%A3%E5%91%8A%E8%88%87%E8%A8%BB%E5%86%8A

## 補充

在 html 使用 component 時要用連接號不然會報錯
![](https://i.imgur.com/0tHBY63.png)
要改成

```javascript
<Child-Component></Child-Component>
```

參考:
https://www.cnblogs.com/danhuai/p/16673754.html
