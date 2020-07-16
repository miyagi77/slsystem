<template>
  <div class="header">
    <h2>商洛市地质灾害信息平台</h2>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#166ab0"
      text-color="#ffffff"
      active-text-color="#FFCE44"
      @select="handleSelect"
    >
      <el-menu-item index="1">{{data1}}</el-menu-item>
      <el-menu-item index="2">{{data2}}</el-menu-item>
      <el-submenu index="3">
        <template slot="title">{{data3.name}}</template>
        <el-menu-item v-for="(item,i) in data3.son" v-bind:key="i" class="sonTitle">{{item.name}}</el-menu-item>
        <!-- <el-menu-item index="">选项2</el-menu-item>
        <el-menu-item index="">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>-->
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">{{data4.name}}</template>
        <el-menu-item v-for="(item,i) in data4.son" v-bind:key="i" class="sonTitle">{{item.name}}</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">{{data5.name}}</template>
        <el-menu-item v-for="(item,i) in data5.son" v-bind:key="i" class="sonTitle">{{item.name}}</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">{{data6.name}}</template>
        <el-menu-item v-for="(item,i) in data6.son" v-bind:key="i" class="sonTitle">{{item.name}}</el-menu-item>
      </el-submenu>
      <el-menu-item index="7">{{data7}}</el-menu-item>
      <el-submenu index="8">
        <template slot="title">{{data8.name}}</template>
        <el-menu-item v-for="(item,i) in data8.son" v-bind:key="i" class="sonTitle">{{item.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="headPortrait">
      <el-row class="demo-avatar demo-basic">
        <el-col>
          <div class="sub-title">管理员</div>
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="50" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "head",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      data1: "一张图",
      data2: "隐患点",
      data3: {
        name: "群测群防",
        son: [{ name: "一表两卡" }, { name: "责任体系" }]
      },
      data4: {
        name: "专业监测",
        son: [
          { name: "通讯设备管理" },
          { name: "设备管理" },
          { name: "原始报文" },
          { name: "设备运行效益" },
          { name: "原始数据" },
          { name: "远程控制" }
        ]
      },
      data5: {
        name: "预警预报",
        son: [
          { name: "气象预警" },
          { name: "群测群防预警配置" },
          { name: "专业监测预警配置" }
        ]
      },
      data6: {
        name: "数据报表",
        son: [{ name: "表格报表" }, { name: "图形报表" }]
      },
      data7: "互联互通",
      data8: {
        name: "系统管理",
        son: [
          { name: "菜单管理" },
          { name: "角色管理" },
          { name: "用户管理" },
          { name: "数据字典" },
          { name: "系统日志" }
        ]
      },
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large"]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #166ab0;
}
.header h2 {
  color: #fff;
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0 50px;
}
.header ul {
  display: inline-block;
  border: none;
  height: 60px;
}
.el-menu-item {
  font-size: 20px !important;
}
.el-menu--horizontal /deep/.el-submenu__title {
  font-size: 20px !important;
}
.el-menu--horizontal /deep/.el-menu--popup-bottom-start {
  margin-top: 0 !important;
}
.sonTitle {
  height: 60px !important;
  line-height: 60px !important;
}
.el-avatar {
  line-height: 60px !important;
  margin-top: 5px;
}
.headPortrait {
  float: right;
  height: 60px;
  line-height: 60px;
  margin: 0 25px;
  font-size: 20px;
  color: #fff;
  width: 7%;
}
.sub-title {
  float: right;
  margin-right: 15px;
}
</style>