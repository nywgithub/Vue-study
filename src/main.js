import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(myPlugin)

// plugin可以更好的复用公共逻辑；适用于全局逻辑
const myPlugin = {
  install(app, options) {
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