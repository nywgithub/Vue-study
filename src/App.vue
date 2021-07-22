<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from 'components/menu'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  .menu-content {
    width: 200px;
    background-color: rgb(84, 92, 100);
    height: 100%;
  }
  .home {
    flex: 1;
  }
}
</style>
