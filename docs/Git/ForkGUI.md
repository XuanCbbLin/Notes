# 補充操作

## Cherry-pick

例如目前有個 master 分支想要 xuan 分支那條上的 commit

- 切到 master 分支
- 在 xuan 的 4846ed044dca0e109736d194cce2c8f61d12b550 commit 按右鍵
- 點 `cherry-pick commit`
- 如果有衝突解決就能拿到 commit

如果要連續多個 commit 就按著 `shift + 滑鼠右鍵` 在按滑鼠右鍵選 `cherry-pick commit`
如果是某幾個 commit 按著 `ctrl + 滑鼠右鍵` 在按滑鼠右鍵選 `cherry-pick commit`

## revert

退回上一次的 commit

例如 目前的 commit 在 `新增內容3` 有以下內容

```html
<div>1</div>
<div>2</div>
<div>3</div>
```

要退回 commit `新增內容2` 還未儲存的內容只有

```html
<div>1</div>
```

在`新增內容2` 點右鍵選擇 `revert commit`,就可以退回`新增內容2` 還未儲存的狀態

## Squash

如果有許多 commit 想要合在一起送就可以用 `Squash` 的方式

例如目前在 `新增內容2`的 commit 想要合併 `新增內容1`

- 滑鼠左鍵到`新增內容2`
- 右鍵選擇 `interactive rebase`
- 選擇 `Squash into parent` 會進入互動模式
- 選前一個 commit 在按 `rebase`
  ![](https://i.imgur.com/emNQlq3.png)
  ![](https://i.imgur.com/wI5nB3R.png)

## Stash

工作到一半要切換到新工作時，目前的工作要先存起來

### 操作方式

- local changes 將一個或多個檔案右鍵選擇 `Stash 2 Files`
  ![](https://i.imgur.com/ifXy8mB.png)

- 互動介面可在 `Stash message` 做紀錄
  ![](https://i.imgur.com/aTYqO8Y.png)

- 完成可在 `Stash`下拉看到存取的資料
  ![](https://i.imgur.com/b9AjkJz.png)

如果工作完成要將未完成的資料弄回來可用以下方式

在 `Stash` 按鈕右鍵選擇存取的 commit 會出現互動介面,按 apply 就會將資料 copy 到分支,如果 `Delete stash` 有勾,在 copy 後,stash 會被刪掉
![](https://i.imgur.com/AYQ3lfa.png)
