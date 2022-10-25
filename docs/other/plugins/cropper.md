# 圖片裁切

- 實作項目
  - 圖片裁切
  - 圖片上傳
  - 圖片縮放

## Vue Advanced Cropper plugin

### Props 參數參考

#### stencilPros and aspectRatio

矩形的裁切框才有 `stencilPros` and `aspectRatio` 可設定

```javascript
<cropper :stencil-props="{ aspectRatio: 4 / 3 }" />
```

### 實作參考

#### 裁切圖片

`toDataURL()` 將 `canvas` 轉成 data URI

```javascript
const getCrop = () => {
  const { canvas } = cropperBox.value.getResult();

  cropedImg.value = canvas.toDataURL();
};
```

#### 上傳圖片

```javascript
const loadImage = event => {
  const { files } = event.target; /* FileList 物件解構 files  */

  if (files?.[0]) {
    const blob = URL.createObjectURL(files[0]);
    const reader = new FileReader();

    reader.readAsArrayBuffer(files[0]);

    reader.addEventListener('load', () => {
      img.value = blob;
    });
  }
};
```

#### 切換裁切框

```javascript

<template>
  <cropper :stencil-component="$options.components.CircleStencil" />
</template>

 export default {
  components: {
    CircleStencil,
  }
};

or

<template>
    <Cropper :stencil-component="CircleStencil" />
</template>

<script>
import { CircleStencil } from 'vue-advanced-cropper';

export default {
    return {
      CircleStencil,
    };
  },
</script>

```

### 參考資料

- 文件

  - [Vue Advanced Cropper](https://advanced-cropper.github.io/vue-advanced-cropper/)

- stencilPros and aspectRatio

  - [stencilProps](https://advanced-cropper.github.io/vue-advanced-cropper/components/cropper.html#props)
  - [aspectRatio](https://advanced-cropper.github.io/vue-advanced-cropper/components/rectangle-stencil.html#aspectratio)

- 裁切圖片

  - [getResult()](https://advanced-cropper.github.io/vue-advanced-cropper/components/cropper.html#getresult)
  - [HTMLCanvasElement.toDataURL()](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLCanvasElement/toDataURL)

- 上傳圖片

  - [Load image from a disc](https://advanced-cropper.github.io/vue-advanced-cropper/guides/recipes.html#load-image-from-a-disc)
  - [使用 change event 獲取選擇的檔案](https://developer.mozilla.org/zh-TW/docs/Web/API/File_API/Using_files_from_web_applications#%E4%BD%BF%E7%94%A8_change_event_%E7%8D%B2%E5%8F%96%E9%81%B8%E6%93%87%E7%9A%84%E6%AA%94%E6%A1%88)
  - [DAY13 - 檔案類的物件關係釐清(2) - Object URL, Data URI](https://ithelp.ithome.com.tw/m/articles/10274082)
  - [FileReader.readAsArrayBuffer()](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/readAsArrayBuffer)
  - [Difference between readAsDataURL() and readAsArrayBuffer() and readAsText() in JavaScript FileReader](https://stackoverflow.com/questions/36500196/difference-between-readasdataurl-and-readasarraybuffer-and-readastext-in-j)
  - [HTML5 筆記–Object URL](https://blog.darkthread.net/blog/html5-object-url/)
  - [https://developer.mozilla.org/zh-TW/docs/Web/API/FileReader](https://developer.mozilla.org/zh-TW/docs/Web/API/FileReader)

- 切換裁切框
  - [Changing a stencil](https://advanced-cropper.github.io/vue-advanced-cropper/guides/recipes.html#changing-a-stencil)

## vue-cropper.js

### 實作參考

#### 上傳圖片

```javascript
const setImage = e => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.addEventListener('load', event => {
    cropper.value.replace(event.target.result);
  });
};
```

### 參考資料

文件\
[Vue-Advanced-Cropper](https://github.com/XuanCbbLin/Vue-Advanced-Cropper)
[cropper.js](https://github.com/fengyuanchen/cropperjs#cropperjs)

上傳圖片\
[FileReader.readAsDataURL()](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/readAsDataURL)
