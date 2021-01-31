<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="商品列表" left-arrow @click-left="$router.back()" />
     <!-- 搜索框 -->
    <van-cell-group>
      <van-field left-icon="search" placeholder="按内容搜索"
    /></van-cell-group>
    <!-- 商品列表 -->
    <van-list v-if="goodsList.length > 0">
      <van-card
        v-for="item in goodsList"
        :key="item.id"
        :price="item.price.toFixed(2)"
        desc="描述信息"
        :title="item.goodsname"
        :thumb="
          item.img ? $imgUrl + item.img : 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1643068963,3293477572&fm=26&gp=0.jpg'
        "
        @click="goDetail(item.id)"
      />
    </van-list>
    <!-- 无商品列表 -->
    <van-list v-else><van-empty description="暂无商品"/></van-list>
  </div>
</template>

<script>
//引入接口
import { getGoods } from "../util/axios";
export default {
  data() {
    return {
      goodsList: []
    };
  },
  mounted() {
    getGoods({
      fid: this.$route.query.id
    }).then(res => {
      if (res.code == 200) {
        this.goodsList = res.list ? res.list : [];
      }
    });
  },
  methods: {
    //封装一个跳转详情事件
    goDetail(id){
      this.$router.push({
        path:'/detail',
        query:{
          id
        }
      })
    }
  },
};
</script>

<style lang="" scoped>
.van-nav-bar{
  background-color: #ff6040;
 
}

.van-multi-ellipsis--l2{
 font-size: 16px;
color: #333333;
}
.van-ellipsis{
  font-size: 14px;
color: #999999;
}
.van-card__price {
font-size: 20px;
color: #FF6040;
}
</style>
