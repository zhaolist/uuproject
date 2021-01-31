<template>
  <div class="mbClass">
    <!-- 导航栏 -->
    
 <van-nav-bar  title="小U商城" left-arrow /> 

<!--  -->

 <mynav></mynav>

<!--  -->


    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img class="swiperImg" :src="$imgUrl + item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="item in brandList" :key="item.title">
        <van-image :src="item.brandImg" />
        <p class="titleName">{{ item.title }}</p>
      </van-grid-item>
      
    </van-grid>
    



 <myshop></myshop>



    <van-tabs type="card">
      <van-tab title="最新商品">
        <van-card
          v-for="newGoods in newList"
          :key="newGoods.id"
          :price="newGoods.price.toFixed(2)"
          desc="描述信息"
          :title="newGoods.goodsname"
          :thumb="
            newGoods.img
              ? $imgUrl + newGoods.img
              : 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1352755651,2584849551&fm=26&gp=0.jpg'
          "
        />
      </van-tab>
      <van-tab title="爆款商品">
        <van-card
          v-for="hotGoods in hotList"
          :key="hotGoods.id"
          :price="hotGoods.price.toFixed(2)"
          desc="描述信息"
          :title="hotGoods.goodsname"
          :thumb="
            hotGoods.img
              ? $imgUrl + hotGoods.img
              : 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1352755651,2584849551&fm=26&gp=0.jpg'
          "
        />
      </van-tab>
      <van-tab title="所有商品">
        <van-card
          v-for="goods in goodsList"
          :key="goods.id"
          :price="goods.price.toFixed(2)"
          desc="描述信息"
          :title="goods.goodsname"
          :thumb="
            goods.img
              ? $imgUrl + goods.img
              : 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1352755651,2584849551&fm=26&gp=0.jpg'
          "
        />
      </van-tab>
    </van-tabs>

   
  </div>
</template>

<script>
//引入axios的核心库
import axios from 'axios'
//引入接口文档
import { getBanner, getIndexGoodsList } from "../util/axios";
import mynav from "./nav";
import myshop from "./shop";
export default {
  data() {
    return {
      bannerList: [], //轮播图列表
      hotList: [], //热门商品
      newList: [], //最新商品
      goodsList: [], //所有商品
      brandList: [
        //品牌集合
        {
          title: "限时秒杀",
          brandImg: require("../assets/images/icon/seckill.png")
        },
        {
          title: "畅销商品",
          brandImg: require("../assets/images/icon/top.png")
        },
        {
          title: "品质大牌",
          brandImg: require("../assets/images/icon/brand.png")
        },
        {
          title: "小U自营",
          brandImg: require("../assets/images/icon/selfsupport.png")
        },
        {
          title: "积分商城",
          brandImg: require("../assets/images/icon/integral.png")
        }
      ]
    };
  },
   components: {
      myshop,
    mynav,
   
  },
  mounted() {
       axios.all([getBanner(),getIndexGoodsList()])
      .then(axios.spread((bannerList,goodsList)=>{
          // console.log(bannerList,'轮播图列表');
          // console.log(goodsList,'商品列表');
          //轮播图
          if(bannerList.code==200){
              this.bannerList = bannerList.list
          }
          //商品列表
          if(goodsList.code==200){
              this.newList = goodsList.list[0].content
              this.hotList = goodsList.list[1].content
              this.goodsList = goodsList.list[2].content
          }
      }))
  }
};
</script>

<style lang="" scoped>
.swiperImg {
  width: 100%;
  height: 3.9rem;
}
.titleName {
  font-size: 14px;
}
.mbClass{
    margin-bottom: 60px;
}
.van-nav-bar{
  background-color: #ff6040;
 
}
.van-swipe{
  border-radius: 10px;
  width:350px;
  margin:auto
}
  

</style>
