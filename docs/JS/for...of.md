# for...of

## 迭代陣列

```javascript
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
```

### 使用 `break` 中斷 `for...of`

```javascript
for (const tile of currentRow) {
  if (!tile.letter) {
    tile.letter = letter;
    break;
  }
}
```

## 參考資料

[for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
