<template>
  <div class="menu-content">
    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="/home">
          <i class="el-icon-menu"></i>
          <span>
            首页
          </span>
        </router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>第一天</span>
        </template>
        <el-menu-item-group>
          <router-link to="/todo">
            <el-menu-item index="1-1">
              练习1-todo
            </el-menu-item>
          </router-link>
          <el-menu-item index="1-2">练习2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style scoped lang="scss">
a {
  display: block;
  color: #fff;
  text-decoration: none;
}
</style>