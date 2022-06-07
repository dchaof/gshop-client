/* 
axios二次封装
1.配置通用的路径和超时
2.显示请求进度条
3.成功返回的数据不再时response，而直接是响应体数据response.data
4.统一处理请求错误，具体请求也可以选择处理和不处理
*/


//
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' 
import store from '@/store'

/*
 配置通用的路径和超时 
 service是一个能够发送任意ajax请求的函数,当然也可以作为对象使用
 */

const service = axios.create({
    //没有配置代理器之前
    //baseURL:'http://gmall-h5-api.atguigu.cn/api',//基础路径
    //配理完代理器
    baseURL:'/api',//基础路径
    timeout:20000//超时时间
})


//添加请求拦截器
service.interceptors.request.use((config)=>{
    //显示请求进度条，在请求拦截器中
    NProgress.start()

    //再请求头中添加用户的唯一标识
    let userTempId = store.state.user.userTempId
    if(userTempId){
        config.headers.userTempId = userTempId
    }


    //再请求头中添加token
    let token = store.state.user.token
    if(token){
        config.headers.token = token
    }
    


    //必须返回config
    return config//根据返回的config，使用xhr发送ajax请求
})


//添加响应拦截器
service.interceptors.response.use(
    response =>{//请求成功返回的回调
        //隐藏请求进度条，在响应拦截器回调中
        NProgress.done()

        //3.成功返回的数据不再时response，而直接是响应体数据response.data
        return response.data
    },
    error=>{//请求失败返回的回调
        //隐藏请求进度条，在响应拦截器回调中
        NProgress.done()
        //统一处理请求错误，具体请求可以选择处理和不处理
        alert(error.message || '未知的请求错误')
        return Promise.reject(error)
    }
)

/* service.get('/xxx').then(result => {

    //const result = response.data
}).catch(error =>{

}) */




//向外暴露service
export default service