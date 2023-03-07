import { createApp } from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './style.css'

import 'amfe-flexible'

const app = createApp(App)

app.use(Antd).mount('#app')
