# axios 管理 API

## 設定方式

- 使用 `axios.create` 建立實體
- 新增 api.js 將 api 封裝再 `export` 出去

### `export` API

分別建立使用者和 todoList api

`api.js`

```javascript
import axios from 'axios';

// User相關的 api
const userRequest = axios.create({
  baseURL: 'https://todoo.5xcamp.us/users/',
});

// todoList
const todoListRequest = axios.create({
  baseURL: 'https://todoo.5xcamp.us/todos/',
});

// User 相關的 api
export const apiUserLogin = data => userRequest.post('/sign_in', data);
export const apiUserLogout = data => userRequest.delete('/sign_out', data);
export const apiUserSignUp = data => userRequest.post('', data);

// todoList 的 api
export const apiGetTodo = data => todoListRequest.get('', data);
export const apiAddTodo = (data, Authorization) => todoListRequest.post('', data, Authorization);
export const apiUpdateTodo = (data, Authorization) =>
  todoListRequest.put(`${currentTodoId}`, data, Authorization);
export const apiDeleteTodo = Authorization => todoListRequest.delete(`${deleteTodoId}`, Authorization);
export const apiChangeTodoCheckBox = Authorization =>
  todoListRequest.patch(`${toggleId}/toggle`, Authorization);
```

### 調用 API

`app.vue`

```javascript
import {
  apiUserSignUp,
  apiUserLogin,
  apiUserLogout,
  apiGetTodo,
  apiAddTodo,
  apiUpdateTodo,
  apiDeleteTodo,
  apiChangeTodoCheckBox,
} from './API/api';

// 使用者註冊;
apiUserSignUp({
  user: {
    email: 'qweq@gmail.com',
    nickname: 'qwe',
    password: 1234567890,
  },
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

// 使用者登入
apiUserLogin({
  user: {
    email: 'string@gmail.com',
    password: 'qwe10109507',
  },
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

// 使用者登出
apiUserLogout({
  headers: {
    Authorization: token,
  },
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

// 取得資料
apiGetTodo({
  headers: {
    Authorization: token,
  },
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

// 新增資料
apiAddTodo(
  {
    todo: {
      content: '1233',
    },
  },
  {
    headers: {
      Authorization: token,
    },
  }
)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

// 修改資料
apiUpdateTodo(
  {
    todo: {
      content: '1233',
    },
  },
  {
    headers: {
      Authorization: token,
    },
  }
)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

// 刪除資料
apiDeleteTodo({
  headers: {
    Authorization: token,
  },
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

// 切換 checkBox 狀態
apiChangeTodoCheckBox({
  headers: {
    Authorization: token,
  },
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
```

## 參考資料

[使用 Axios 你的 API 都怎麼管理？](https://medium.com/i-am-mike/%E4%BD%BF%E7%94%A8axios%E6%99%82%E4%BD%A0%E7%9A%84api%E9%83%BD%E6%80%8E%E9%BA%BC%E7%AE%A1%E7%90%86-557d88365619)\
[五倍 API](https://todoo.5xcamp.us/api-docs/index.html)
