<template>
  <div id="app">
    <div class="shop">
      <div class="tao">
        <div class="l-bg"></div>
        <div class="left">
          <div class="l-top">
            <h2>限时秒杀</h2>
            <h3>查看更多 ></h3>
          </div>
          <p>每天0点场，好货秒不停</p>
          <div class="time">
            <span>00</span>: <span>00</span>:
            <span>00</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div
          v-for="item in shoplist"
          :key="item.id"
          :style="item.note"
          :class="item.css"
        >
          <!-- {{ item.css }} -->
          <h1>{{ item.class }}</h1>
          <p>{{ item.des }}</p>
          <span>{{ item.start }} <i class="iconfont icon-youjiantou"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      css: ["top", "bottom"],
      shoplist: [
        {
          id: 1,
          css: "top",
          class: "品牌上新",
          des: "9点整，抢大牌",
          start: "疯抢红包",
          note: {
            backgroundImage:
              "url(" + require("../assets/images/index/small.png") + ")"
          }
        },
        {
          id: 2,
          css: "bottom",
          class: "日用好物",
          des: "愿君多采撷",
          start: "塞满奖券",
          note: {
            backgroundImage:
              "url(" + require("../assets/images/index/but.png") + ")"
          }
        }
      ]
    };
  }
};
</script>

<style></style>
