import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import eslintPlugin from 'vite-plugin-eslint'
// import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/blog/',
  // base: '/learn/', // 子目錄路徑
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets' // 確認資源目錄配置
  // },
  plugins: [
    vue(),
    eslintPlugin({
      cache: false // 關閉快取，確保每次儲存都重新檢查
    }),
    AutoImport({
      eslintrc: {
        enabled: true // 讓插件生成適合 ESLint 的設定
      },
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.js'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
