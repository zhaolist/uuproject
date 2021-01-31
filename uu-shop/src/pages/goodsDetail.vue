<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="商品详情" left-arrow @click-left="$router.back()" />
    <!-- 详情内容渲染 -->
    <div>
      <img
        :src="
          detailList.img
            ? $imgUrl + detailList.img
            : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2110781559,1833515387&fm=26&gp=0.jpg'
        "
        alt=""
      />
    </div>

    <p class="pricebox left">
      <span class="price">￥{{ detailList.market_price }}</span>
      <span class="priceInfo">此商品于2020-11-11,00点结束闪购特卖</span>
    </p>
    <p class="goodsname left">{{ detailList.goodsname }}</p>
    
    <div class="pricebox left">
      <span class="goodsnum">购买数量</span>
      <van-stepper v-model="num" />
    </div>
    <div class="left">
      <span class="goods">商品属性</span>

      <span class="good"> {{ detailList.specsname }} </span>
      <van-tag v-for="attr in attrList" :key="attr" type="success">{{
        attr
      }}</van-tag>
     
    </div>
     <div class="goodsname left pricebox">
        商品详情
      </div>
      <div v-html="detailList.description"></div>
    <!-- 商品导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button
        @click="toCart"
        type="warning"
        text="加入购物车"
      />
      <van-goods-action-button @click="toBuy" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
//调取封装的接口
import { getGoodsInfo ,addCart} from "../util/axios";
import {Toast} from 'vant'
//调用弹框要引入一下
import {Dialog} from 'vant'
export default {
  data() {
    return {
      detailList: {}, //商品详情
      num: 0, //购买数量
      attrList: []
    };
  },
  mounted() {
    //组件一加载就调取商品详情接口
    getGoodsInfo({
      id: this.$route.query.id
    }).then(res => {
      // console.log(res, "商品详情");
      if (res.code == 200) {
        this.detailList = res.list[0];
        this.attrList = res.list[0].specsattr
          ? res.list[0].specsattr.split(",")
          : [];
      }
    });
  },
  methods: {
  
    toCart() {
      
       
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo')).uid;
        console.log(userInfo);
        if(userInfo){
            //调取添加接口    
            console.log(1); 
            // console.log(userInfo);  
            // console.log(this.num,'this.num');  
            // console.log(this.detailList.id,'this.detailList.id');  
            addCart({
                uid: userInfo,
            goodsid:this.detailList.id,
            num : this.num
            })
            .then(res=>{
            //       console.log(userInfo);  
            // console.log(this.num,'this.num');  
            // console.log(this.detailList.id,'this.detailList.id');  
            //   console.log(res);
                Toast.success(res.msg)
                // //跳转到购物车列表
                this.$router.push({
                    path:'/cart',
                    query:{
                        uid:userInfo
                    }
                })
            })
        }else{
            //未登录的状态让其去登录
            this.$router.push('/login')
        }
    
    },
    //跳转到订单页
    toBuy() {
      Dialog.alert({
        message: "请联系客服"
      }).then(() => {
        // on close
      });
    }
  }
};
</script>

<style lang="" scoped>
.van-nav-bar{
  background-color: #ff6040; 
}
.pricebox{
  margin:15px 0 10px 0;
}
.goodsname {
  font-size: 25px;
color: #333;
}
.goodsnum{
   font-size: 21px;
color: #333;

  margin: 10px 10px 10px 0;
}
.goods{
  font-size: 19px;
color: #333;
margin-right: 10px;
}
.left{
  margin-left: 15px;
}
.good{
  font-size: 17px;
color: #333;
}
.price { 
  font-size: 30px;
color: #FF6040;
}
.priceInfo {
  font-size: 14px;
color: #999999;
}
.van-stepper {
  display: inline-block;
}
img{
  width: 7.5rem;
}
</style>
