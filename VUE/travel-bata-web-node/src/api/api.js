import requset from "./request.js"

const userApi = {
    //用户登录
    login:(data)=>{
      reture request(
      {
        url:'/User/Login',
        methods:"post",
        data:data,
      })
      
    },
    
}