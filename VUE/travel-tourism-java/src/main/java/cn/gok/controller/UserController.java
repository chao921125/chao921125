package cn.gok.controller;



import cn.gok.entity.User;
import cn.gok.service.UserService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/userController")
public class UserController {

    @Autowired
    public UserService userService;

    @RequestMapping("/toForm")
    @ResponseBody
    public String toFrom(){
        return "form";
    }

    //添加用户
    @RequestMapping("/addUser")
    @ResponseBody
    public String addUser(User user){
        System.out.println("进入控制层,获取的数据为:"+user.toString());
        //把获取的数据提交到service层
        userService.addUser(user);
        //返回添加成功页面
        return "add_Success";
    }


    //删除用户
    @RequestMapping("/deleteUser")
    @ResponseBody
    public String deleteUser(int id){
        userService.deleteUser(id);
        return "delete_success";
    }


    //修改用户
    @RequestMapping("/updateUser")
    @ResponseBody
    public String updateUser(int user_id,String user_name,String user_pwd,String user_tel,String user_email){
        userService.updateUser(user_id,user_name,user_pwd,user_tel,user_email);
        return "update_success";
    }

    //查询所有用户
    @RequestMapping("/selectAll")
    @ResponseBody
    public List<User> selectAll(){
        System.out.println("进入控制层");
        List<User> list = userService.selectUser();
        return list;
    }


    //登录
    @RequestMapping("/login")
    @ResponseBody
    public boolean login(@Param("user_name") String user_name,@Param("user_pwd")String user_pwd){
        //获取前端传递的参数
        System.out.println(user_name);
        System.out.println(user_pwd);

        return userService.login(user_name,user_pwd);

    }

    //注册
    @RequestMapping("/register")
    @ResponseBody
    public boolean register(@Param("user_name") String user_name, @Param("user_pwd")String user_pwd,@Param("user_tel")String user_tel,@Param("user_email") String user_email){
        int user_role = 1;
        User user = new User(user_name,user_pwd,user_tel,user_email,user_role);
        userService.register(user);
        return true;
    }
}
