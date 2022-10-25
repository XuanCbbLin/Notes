import { defineConfig } from 'vitepress';

export default defineConfig({
  themeConfig: {
    nav: [{ text: 'Other', link: '/other/project-format/Vite' }],
    sidebar: {
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
      ],
    },
  },
});
