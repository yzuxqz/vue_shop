// 按需导入
import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
// 注册为全局可用组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 全局挂载消息弹框组件
Vue.prototype.$message = Message
