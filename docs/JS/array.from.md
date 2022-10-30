# Array.from

## 建立二維陣列

```javascript
const board = Array.from({ length: 6 }, () => {
  return Array.from({ length: 5 }, () => ({
    letter: '',
  }));
});
```

或是

```javascript
const board = Array.from({ length: 6 }, () =>
  Array.from({ length: 5 }, () => ({
    letter: '',
  }))
);
```

### 參考資料

[Array.from](https://javascript.info/iterable#array-from)\
[使用箭頭函式及 Array.from](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from#%E4%BD%BF%E7%94%A8%E7%AE%AD%E9%A0%AD%E5%87%BD%E5%BC%8F%E5%8F%8A_array.from)
