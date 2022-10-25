# Base64

此內容根據 vite 設定 assetsInlineLimit 圖片產生 Base64 的延伸筆記

## 使用 Base64 原因

因為實體圖片會經過 http request 載入圖片需要時間，為了減少圖片載入時間其中一種方式就是使用 base64，而 base64 是透過 data URIs 格式組成

```javascript
data:[<mediatype>][;base64],<data>
```

```javascript
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABpCAMAAABYihB" alt="">
```

## base64 缺點

- 原始圖片大小經過 base64 編碼後可能會比原始圖片還要大，還是存在效能問題
- base64 編碼不會被瀏覽器快取

## 參考資料

[Importing Asset as URL](https://vitejs.dev/guide/assets.html#importing-asset-as-url)\
[build.assetsInlineLimit](https://vitejs.dev/config/build-options.html#build-assetsinlinelimit)\
[前端小字典三十天【每日一字】– Base64](https://ithelp.ithome.com.tw/articles/10159038)\
[hackmd 筆記 vite 的 assetsInlineLimit 設計](https://hackmd.io/nXtSyfG0StObLaPW4pS0DA#vite-%E7%9A%84-assetsInlineLimit-%E8%A8%AD%E8%A8%88)\
[淺談 Base64 與應用實例分享](https://blog.errorbaker.tw/posts/cian/base64-qrcode/)\
[關於圖片的 Base64 編碼，你了解嗎？](https://kknews.cc/zh-tw/tech/aebggq6.html)\
[新手坑：讓人又愛又恨的 HTTP Caching](https://medium.com/frochu/http-caching-3382037ab06f)\
[Base64 Images](https://www.cythilya.tw/2018/07/26/base64-images/)\
[data URIs](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)\
[初探快取 ＆ HTTP Caching](https://ithelp.ithome.com.tw/articles/10276125)\
