# 部屬到 github 和 設定 github actions 自動部屬

## 部屬到 github

- `config.ts` 或 `config.js` 設定 `base`指向 repo 名稱,例如

  https://github.com/username/repoName.git

  ```TypeScript
  import { defineConfig } from 'vitepress';

  export default defineConfig({
       base: '/repoName/',
  })
  ```

- 根目錄新增`deploy.sh` 設定腳本

  ```sh
  #!/usr/bin/env sh

  # 確保腳本遇到的錯誤
  set -e

  # 打包
  pnpm docs:build

  # 切換到打包後的資料夾
  cd docs/.vitepress/dist

  # 初始化打包後的資料夾
  git init
  git add -A
  git commit -m 'deploy'

  # if you are deploying to https://<USERNAME>.github.io
  # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

  # if you are deploying to https://<USERNAME>.github.io/<REPO>
  # git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

  # push remote add gh-pages branch
  git push -f https://github.com/username/repoName.git master:gh-pages

  cd -

  ```

- 如果是 windows 可以開 `bash` , 執行 `sh deploy.sh` 跑剛剛建立的 `deploy.sh` 腳本

## 設定 github actions 自動部屬

已經部屬專案,接下來可以設定每次 commit 後執行 `git push` 讓 remote 自動部屬,就不用手動執行,以 github actions 為例

- `config.ts` 或 `config.js` 設定 `base`指向 repo 名稱
- 根目錄建立 `.github/workflows` 新增 `deploy.yml`

  這裡是用`pnpm`建立部屬後的設定

  ```yaml
  name: Deploy

  on:
  push:
      branches:
      - master

  jobs:
  deploy:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v3
          with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
          with:
          node-version: 16

      - name: Install pnpm
          run: npm i -g pnpm
      - name: install & Build
          run: pnpm i && pnpm docs:build

      - name: Deploy
          uses: peaceiris/actions-gh-pages@v3
          with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
          # cname: example.com # if wanna deploy to custom domain
  ```

## `deploy.yml` 設定注意事項

- 沒有找到 `pnpm`的檔案

  ```sh
  Error: Unable to locate executable file: pnpm.
  Please verify either the file path exists
  or the file can be found within a directory specified by
  the PATH environment variable.
  Also check the file mode to verify the file is executable.
  ```

  解決方式
  執行 `uses: actions/setup-node@v3` 時加上 `npm i -g pnpm` install pnpm

- `deploy.yml` 設定要加上 `pnpm i`下載 node_modules

  ```yaml
  - name: install & Build
    run: pnpm i && pnpm docs:build
  ```

- 成功將自動部屬設定後,到 github `settings => pages` 設定靜態頁面\
  而且要將分支切到 `gh-pages` 資料夾切到 `/root`,如果切到 `/docs` 會找不到,以下是設定在 `gh-pages/docs` 的錯誤訊息

  ```sh
  ...略
  Conversion error:
  Jekyll::Converters::Scss encountered an error
  while converting
  'assets/css/style.scss':No such file or directory
  @ dir_chdir - /github/workspace/docs
  ...略
  ```

## 參考資料

[vitepress Deploying](https://vitepress.vuejs.org/guide/deploying)\
[Error: Unable to locate executable file: pnpm](https://github.com/actions/setup-node/issues/530)\
[vitepress base config](https://vitepress.vuejs.org/config/app-configs#base)
