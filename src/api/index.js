import axios from "axios"
import router from '@/router/index.js'
import ElementUI from 'element-ui'
const myaxios = axios.create({
    timeout: 5000,  //设置请求超时时间
});
myaxios.defaults.baseURL = '/sys';  //设置前端所有的请求的基础路径。
//axios拦截器( 请求前置，响应前置 )
//响应结果到达 then()回调函数之前执行。
myaxios.interceptors.response.use(response=>{
    //请求到Java服务器，Java代码执行过程中业务方法操作失败，通过Java设置错误返回码
    let Result = response.data;
    if(Result.code==200){
        //如果状态码是200，表示请求成功，就正常执行axios请求回调 .then()函数
        return response;
    }else{
        //返回code不是200，表示各种请求的失败码，直接进行错误提示：
        ElementUI.Message.error(Result.msg?Result.msg:"系统异常",{
            duration:1000,  //间隔1000毫秒自动关闭错误消息框。
        });
        return Promise.reject(response.data.message);
    }
},error=>{
    //http协议: 请求失败，HTTP协议有很多错误码，需要将请求失败错误提示显示。
    //error是对http请求不同错误状态码做判断
    if(error){
        error.message = error.response.data.msg;
    }
    if(error.response.status== 401){
        //401：表示Java服务器上的API接口是有权限，当前登录用户不具备该权限，会报401。
        router.push('/login');
        return Promise.reject(error);
    }
    if(error.response.status==404){
        //HTTP如果是404,就是请求路径有问题，或者请求文件不存在。就跳转至 访问不到资源的 错误
        router.push('/notFound');
        return Promise.reject(error);
    }
    if(error.response.status==400){
        //状态码是400，就是请求Java服务器方法的方式错误( 没有按照规定请求方法。 )。
        error.message='请求服务器端方法错误';
    }
    if(error.response.status==500){
        error.message='服务器端代码发生错误';
    }
    //弹框显示错误信息
    Element.Message.error(error.message,{
        duration:1000,
    });
    return Promise.reject(error);
})

export default myaxios