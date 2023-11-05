import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import '@/assets/css/base.less'

const app = createApp(App)

app.use(router).use(Antd)

app.mount('#app')
