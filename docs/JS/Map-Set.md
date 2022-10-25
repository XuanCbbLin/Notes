# Map and Set

除了使用 `array` and `object` 處理資料外,也能使用 `Map` 和 `Set`

## Map

Map 是 key 和 value 組成

### 基本宣告

Map 的 key 可以是任何型別

```javascript
let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

// 或是用鏈式塞資料
map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');

for (let entry of map) {
  console.log(entry);
}
```

### 將物件當作 Key 使用

```javascript
let john = { name: 'John' };

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);

console.log(visitsCountMap);
console.log(visitsCountMap.get(john));
```

- 物件當作 Key 時, 多個 Key 會被覆寫

```javascript
let john = { name: 'John' };
let ben = { name: 'Ben' };

let visitsCountObj = {};

visitsCountObj[ben] = 234;
visitsCountObj[john] = 123;

console.log(visitsCountObj);
console.log(visitsCountObj['[object Object]']); // 123
```

### 迭代 Map

- Map 使用 `keys()`

```javascript
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

console.log(recipeMap.keys());

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

console.log(recipeMap.values());
```

- Map 使用 `values()`

```javascript
for (let amount of recipeMap.values()) {
  console.log(amount);
}
```

- 直接迭代 Map

```javascript
for (let entry of recipeMap) {
  console.log(entry);
}
```

### Map 使用 `forEach`

```javascript
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});
```

### 純物件建立 Map

先用 `Object.entries` 轉成陣列,在變 Map

```javascript
let obj = {
  name: 'John',
  age: 30,
};

let map = new Map(Object.entries(obj));

console.log(map.get('name'));
```

### 使用 `Object.fromEntries` 將 Map 資料轉物件

`Object.fromEntries` 將陣列轉物件

```javascript
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4],
]);
```

使用情境例如要將 Map 轉成物件給別的變數

```javascript
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)
// or let obj = Object.fromEntries(map); // omit .entries()

console.log(obj.orange);
```

## Set

Set 只有 value 的集合,而且每個值只會出現一次

### 基本使用

```javascript
let set = new Set();

console.log(set);

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };
let mama = { name: 'Mary' };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
set.add(mama);

// set keeps only unique values
console.log(set.size);

for (let user of set) {
  console.log(user.name);
}
```

### 迭代 Set

- 使用 `for..of`

```javascript
let set = new Set(['oranges', 'apples', 'bananas']);

console.log(set);

for (let value of set) console.log(value);
```

- 使用 `forEach`

```javascript
let set = new Set(['oranges', 'apples', 'bananas']);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});
```

## 總結

- `Map` 是 Key 和 value 的組成
- `Set` 是唯一值的組成

## 參考資料

[Map and Set](https://javascript.info/map-set)\
[Clean Up Your Code by Removing ‘if-else’ Statements](https://bytefish.medium.com/clean-up-your-code-by-removing-if-else-statements-31102fe3b083)
