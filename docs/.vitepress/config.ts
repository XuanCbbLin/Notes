import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/Notes/',
  themeConfig: {
    nav: [
      { text: 'Vue', link: '/vue/Creating-Vue-Application' },
      { text: 'Vite', link: '/vite/config' },
      { text: 'JS', link: '/JS/Map-Set' },
      { text: 'CSS', link: '/css/tailwindicss/background-image' },
      { text: 'Git', link: '/Git/ForkGUI' },
      { text: 'Other', link: '/other/project-format/Vite' },
    ],
    sidebar: {
      '/vue/': [
        {
          text: 'vue 補充內容',
          collapsible: true,
          items: [{ text: 'option 方式建立 vue app', link: '/vue/Creating-Vue-Application' }],
        },
      ],
      '/vite/': [
        {
          text: 'Vite 相關設定',
          collapsible: true,
          items: [
            { text: 'Vite config', link: '/vite/config' },
            { text: 'Base64', link: '/vite/Base64' },
            { text: 'css 設定', link: '/vite/CSS' },
            { text: 'MPA 多頁應用設定', link: '/vite/Multi-Page-App' },
            { text: 'ENV 檔案和環境 mode 設定', link: '/vite/Env-Variables-Modes' },
          ],
        },
      ],
      '/JS/': [
        {
          text: 'JS',
          collapsible: true,
          items: [
            { text: 'Map 和 Set 用法', link: '/JS/Map-Set' },
            { text: 'Array.from ', link: '/JS/array.from' },
            { text: 'for...of ', link: '/JS/for...of' },
          ],
        },
      ],
      '/css/': [
        {
          text: 'tailwindicss',
          collapsible: true,
          items: [{ text: 'background-image', link: '/css/tailwindicss/background-image' }],
        },
        {
          text: 'unocss',
          collapsible: true,
          items: [{ text: 'config', link: '/css/unocss/config' }],
        },
        {
          text: 'windicss',
          collapsible: true,
          items: [{ text: 'background-image', link: '/css/windicss/background-image' }],
        },
      ],
      '/Git/': [
        {
          text: 'Git',
          collapsible: true,
          items: [{ text: 'Fork GUI 功能操作', link: '/Git/ForkGUI' }],
        },
      ],
      '/other/': [
        {
          text: '專案初始設定',
          collapsible: true,
          items: [
            { text: 'Vite 專案初始設定', link: '/other/project-format/Vite' },
            { text: 'Vue CLI 初始設定', link: '/other/project-format/Vue-CLI' },
            { text: '其他 format 設定', link: '/other/project-format/otherFormat' },
            { text: 'eslint 沒有 prettier 設定', link: '/other/project-format/eslintFormat' },
          ],
        },
        {
          text: 'axios',
          collapsible: true,
          items: [{ text: 'axios api 管理', link: '/other/axios/package-api' }],
        },
        {
          text: 'plugins',
          collapsible: true,
          items: [
            { text: 'unplugin-icons', link: '/other/plugins/unplugin-icons' },
            { text: 'cropper', link: '/other/plugins/cropper' },
          ],
        },
        {
          text: 'vitepress',
          collapsible: true,
          items: [{ text: 'deploying', link: '/other/vitepress/deploying' }],
        },
      ],
    },
  },
});
