<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="注册" left-arrow @click-left="$router.back()" />
    <van-form @submit="register">
      <van-field
        v-model="regList.phone"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <van-field
        v-model="regList.nickname"
        name="昵称"
        label="昵称"
        placeholder="请输入昵称"
        :rules="[{ required: true, message: '请输入昵称' }]"
      />
      <van-field
        v-model="regList.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
       <div class="reg">已有账号？<span class="regs" @click="go()">去登录</span></div>
    </van-form>
  </div>
</template>

<script>
// 引入轻提示
import {Toast} from 'vant'
import {register} from '../util/axios'
export default {
  data() {
    return {
        regList:{
            phone:'',
            nickname:'',
            password:''
        }
    };
  },
  methods: {
      //封装一个注册事件
      register(){
          register(this.regList)
          .then(res=>{
              console.log(res,'响应');
              if(res.code==200){
                  //注册成功之后跳转到 登录页面
                  this.$router.push('/login')
                  Toast.success(res.msg)
              }else{
                   Toast.fail(res.msg)
              }

          })
      },
       go(){
         this.$router.push('/login')
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
