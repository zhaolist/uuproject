<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="分类" left-arrow />
    <!-- 搜索框 -->
    <van-cell-group>
      <van-field left-icon="search" placeholder="按内容搜索"
    /></van-cell-group>
    <div class="cateInfo">
      <!-- 侧边栏 -->
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item v-for="item in cateList" :key='item.id' :title="item.catename" />
      </van-sidebar>
      <!-- 二级分类展示 -->
      <van-grid :border="false" :gutter='10' :column-num="3">
        <van-grid-item :to="'/list?id='+item.id" v-for='item in secondList' :key='item.id'>
          <van-image :src="item.img?$imgUrl+item.img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2553999294,3385368620&fm=26&gp=0.jpg'" />
          <p class="catetitle">{{item.catename}}</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
//引入接口列表
import {getCateList} from '../util/axios'
export default {
  data() {
    return {
      activeKey: 0,
      cateList:[],
      secondList:[]
    };
  },
  mounted() {    
      this.getCateInfo()
  },
  methods: {      
      onChange(){
          console.log(this.activeKey,'activeKey');
          this.secondList = this.cateList[this.activeKey].children
      },
     
      getCateInfo(){
          getCateList()
          .then(res=>{
              if(res.code==200){
                  //一级分类
                  this.cateList = res.list
                  //二级分类
                  this.secondList = res.list[0].children
              }
          })
      }
  },
};
</script>

<style lang="" scoped>
.cateInfo{
    display: flex;
}
.van-grid{
    flex: 1;
}
.catetitle{
    font-size: 13px;   
    margin-top:8px;
color: #999;
}
.van-nav-bar{
  background-color: #ff6040;
 
}

</style>
