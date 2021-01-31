import axios from 'axios'

let http  = axios.create({
    baseURL:'/api'//你的代理服务器地址
})

//axios拦截器
//请求拦截
http.interceptors.request.use(req=>{
    //设置请求拦截之后，要返回值这个配置
    return req
})

//响应拦截 一般用于全局拦截错误
http.interceptors.response.use(res=>{
    return res.data
})

export default http

