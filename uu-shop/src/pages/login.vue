<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()" />
    <van-form @submit="login">
      <van-field
        v-model="loginList.phone"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <van-field
        v-model="loginList.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
      <div class="reg">没有账号？<span class="regs" @click="go">去注册</span></div>
    </van-form>
  </div>
</template>

<script>
// 引入轻提示
import {Toast} from 'vant'
import {login} from '../util/axios'
export default {
  data() {
    return {
        loginList:{
            phone:'',
            password:''
        }
    };
  },
  methods: {
      //封装一个注册事件
      login(){
          login(this.loginList)
          .then(res=>{        
              if(res.code==200){
                  //登录成功之后把信息存储到本地存储中
                  sessionStorage.setItem('userInfo',JSON.stringify(res.list))                 
                  this.$router.push('/mine')
                  Toast.success(res.msg)
              }else{
                   Toast.fail(res.msg)
              }

          })
      },
      go(){
         this.$router.push('/register')
      }
  },
};
</script>

<style lang="" scoped>
.van-nav-bar{
  background-color: #ff6040;
 
}
.van-form{
  width: 6rem;
  margin:1rem auto;
  /* margin-top: 1rem; */
}
.reg{
  font-size: 14px;
  float: right;
  margin-right: 25px;
}
.regs{
  color:  #ff6040;
}
</style>
