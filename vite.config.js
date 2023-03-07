import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: process.env.NODE_ENV === 'production' ? './' : '/',
    css: {
        postcss: {
            plugins: [
                postCssPxToRem({
                    rootValue: 102.4,
                    propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
                    minPixelValue: 2 // 小于2px的元素一概不转换rem
                })
            ]
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://cloud.xjkjtech.com:5288/kingdeewebapi/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
