<template>
  <div id='day01'>
    <h2>{{state.count}}--{{count2}}---{{state.doubleCount}}</h2>
    <div @click="add">count: {{ state.count }}</div>
    <div @click="add2">count: {{ count2 }}</div>
    //传送门：把mask挂载到不属于当前template的body中去
    <teleport to="body">
      <div class="mask">蒙层</div>
    </teleport>
  </div>
</template>

<script>
const { createApp, reactive, ref, computed, watch } = Vue
// reactive: 接收一个普通对象然后返回该普通对象的响应式代理。等同于 2.x 的 Vue.observable()
// ref: 接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 .value。
// computed: 传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。
// watch API 完全等效于 2.x this.$watch （以及 watch 中相应的选项）。watch 需要侦听特定的数据源，并在回调函数中执行副作用。默认情况是懒执行的，也就是说仅在侦听的源变更时才执行回调。
const App = {
  // setup 函数是一个新的组件选项。作为在组件内使用 Composition API 的入口点。
  // 调用时刻是初始化属性props确定后，beforeCreate之前
  setup() {
    const count2 = ref(1)
    // 响应化：接收一个对象，返回一个响应式的代理对象
    const state = reactive({
      count: 1,
      // computed()返回一个不可变的响应式引用对象 
      // 它封装了getter的返回值 
      doubleCount: computed(() => state.count * 2)
    })
    watch(
      () => state.count,
      (count, prevCount) => {
        /* ... */
        console.log('state.count', count, prevCount);

      }
    )
    watch(count2, (count, prevCount) => {
      /* ... */
      console.log('count2', count, prevCount);
    })
    function add() {
      state.count++
    }
    function add2() {
      count2.value++
    }
    // 返回对象将和渲染函数上下文合并
    return { count2, state, add, add2 }
  }
}
createApp(App).mount('#app')
</script>

<style>
</style>