<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="个人中心" left-arrow @click-left="$router.back()" />
    <!-- 头像 -->
    <div v-if="userInfo" class="imgInfo">
        <div class="head">
      <van-image
        round
         width="1.5rem"
        height="1.5rem"
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=364456287,3104521459&fm=26&gp=0.jpg"
      />
      <!-- 用户名 -->
      <p class="nickname">{{ userInfo.nickname }}</p>
        </div>
      <van-button @click="logout" type="danger">退出登录</van-button>
    </div>
    <!-- 未登录让他去登录 -->
    <div class="imgInfo" v-else>
     <div class="head">
        <van-image
        round
        width="1.5rem"
        height="1.5rem"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.669pic.com%2Felement_pic%2F8%2F0%2F87%2F90%2F430fc441585d2fdc1018b7e87d479073.jpg&refer=http%3A%2F%2Fimages.669pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613787247&t=e67de3f011af23b94547cbbb96f1366f"
      />
      <!-- 用户名 -->
      <p class="nickname">XXXX</p>
     </div>
      <van-button @click="$router.push('/login')" type="warning">去登录</van-button>
    </div>
    <div>
      <van-cell title="地址管理" icon="location-o" />
      <van-cell title="我的钱包" icon="gold-coin-o" />
      <van-cell title="我的二维码" icon="qr" />
      <van-cell title="我的小伙伴" icon="friends-o" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {
    //把登录信息从存储中取出来
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : false;

      console.log(this.userInfo,'userInfouserInfouserInfo');
  },
  methods: {
        logout(){
          sessionStorage.removeItem('userInfo')
          this.$router.push('/login')
      }
  },
};
</script>

<style lang="" scoped>
.imgInfo {
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
   background-color: #ff6040;
  display: flex;
}
.head{
  display: flex;
    align-items: center;
}
.nickname {
  font-size: 24px;
  color: #333;
  margin-left: 20px;
}
.van-nav-bar{
  background-color: #ff6040;
 
}
</style>
