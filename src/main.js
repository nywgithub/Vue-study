import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(myPlugin);

// plugin可以更好的复用公共逻辑；适用于全局逻辑
const myPlugin = {
  install(app, options) {
    console.log(options)
    app.provide('name', 'nyw');
    app.directive('focus', {
      mounted(el) {
        el.focus
      }
    })
    app.mixin({
      mounted() {
        console.log('mixin')
      }
    })
    //在全局属性上扩展一个变量 $sayHello
    app.config.globalproperties.$sayHello = 'hello world'
  }
}