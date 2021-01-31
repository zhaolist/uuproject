<template>
  <div id="app">
    <div class="nav">
      <div class="top">
        <i class="iconfont icon-dingwei1"></i>
        <h1><img :src="navImg" alt="" /></h1>
        <!-- 搜索 -->
        <div class="search">
          <span> <i class="iconfont icon-fangdajing"></i></span>
          <input type="text" placeholder="按内容搜索" />
        </div>
        <i class="iconfont icon-dianpu"></i>
      </div>
      <!-- nav -->
      <div class="buttom">
        <span class="line"></span>
        <span class="tuijian">推荐</span>
        <ul>
          <li v-for="item in navlist" :key="item.id">{{ item.name }}</li>
        </ul>
        <span class="yinying"></span>
        <div class="fenlei">
          <i class="iconfont icon-fenlei"></i><span>分类</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navImg: require("../assets/images/index/white.png"),
      navlist: [
        { id: 1, name: "女装" },
        { id: 2, name: "鞋包" },
        { id: 3, name: "居家" },
        { id: 4, name: "母婴" },
        { id: 5, name: "美妆" }
      ]
    };
  }
};
</script>

<style lang="">

</style>
