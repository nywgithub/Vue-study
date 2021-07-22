<template>
  <div id='day02'>
    <div>{{name}}</div>
  </div>
</template>

<script>
const { createApp, reactive, ref, computed, watch } = Vue

const App = {

  setup(props, context) {
    const data = reactive({ name: 'nyw' })
    //toRef 可以应当对象中无属性的情况
    const { age } = toRef(data)
    setTimeout(() => {
      age.value = 'lpj'
    }, 2000)
    return { age }
  }
}

</script>

<style>
</style>