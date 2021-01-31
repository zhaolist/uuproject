import http from './axios'



//获取轮播图信息(首页)
export function getBanner(){
    return http.get('/api/getbanner')
}


//获取商品信息(首页)
export function getIndexGoodsList(){
    return http.get('/api/getindexgoods')
}


//获取分类树形结构
export function getCateList(){
    return http.get('/api/getcatetree')
}



//获取分类商品
export function getGoods(params){
    return http.get('/api/getgoods',{
        params
    })


}
//获取一个商品信息
export function getGoodsInfo(params){
    return http.get('/api/getgoodsinfo',{
        params
    })
}



//会员注册
export function register(data){
    return http.post('/api/register',data)
}

//会员登录
export function login(data){
    return http.post('/api/login',data)
}
//购物车列表
export function getCartList(params){
    return http.get('/api/cartlist',{
        params
        
    })
}



//购物车添加
export function addCart(data){
    // console.log(data,'11111111111111111111111111111')
    return http.post('/api/cartadd',data)
}
//购物车删除
export function deleteCart(data){
    return http.post('/api/cartdelete',data)
}


