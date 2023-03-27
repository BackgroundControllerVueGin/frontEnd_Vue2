<template>
  <el-container class="home-container">
    <el-header>学生后台管理</el-header>
    <!-- 侧边 -->
    <el-container>
      <el-aside width="176px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          background-color="#e8f4f5"
          text-color="#545c64"
          active-text-color="#f56c6c"
          unique-opened
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              用户管理
            </template>
            <el-menu-item index="user">用户列表</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              学生信息
            </template>
            <el-menu-item index="student">学生信息查询</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              班级管理
            </template>
            <el-menu-item index="3-1">学生班级管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script></script>
<style lang="less" scoped>
.home-container {
  height: 100%;
}
// .el-header {
//   background-color: rgba(219, 238, 240, 0.651);
//   display: flex;
//   text-align: center;
//   justify-content: space-between;
//   padding-left: 0;
//   //  让按钮上下居中（垂直居中）而不是上下贴边
//   align-items: center;
//   font-size: 20px;
//   .header-container {
//     display: flex;

//     align-items: center;
//     img {
//       width: 70px;
//     }
//     span {
//       margin-left: 15px;
//     }
//   }
// }
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  .el-menu {
    border-right: null;
  }
}

.el-main {
  background-color: rgb(170, 226, 230);
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
