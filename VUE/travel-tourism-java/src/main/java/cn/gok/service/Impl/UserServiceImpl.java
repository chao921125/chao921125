package cn.gok.service.Impl;

import cn.gok.dao.UserDao;
import cn.gok.entity.User;
import cn.gok.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;


    @Override
    public void addUser(User user) {
        System.out.println("进入service层，准备执行添加用户的操作");
        userDao.addUser(user);
    }

    @Override
    public void deleteUser(int id) {
        System.out.println("进入service层，并把获取的请求发送至dao层");
        userDao.deleteUser(id);
    }

    @Override
    public void updateUser(int user_id,String user_name,String user_pwd,String user_tel,String user_email) {
        System.out.println("进入service层，并把获取的请求发送至dao层");
        userDao.updateUser(user_id,user_name,user_pwd,user_tel,user_email);
    }

    @Override
    public List<User> selectUser() {
        System.out.println("进入service层，并把获取的请求发送至dao层");
        return userDao.selectUser();
    }

    //服务层登录方法
    @Override
    public boolean login(String user_name, String user_pwd){
        System.out.println("进入service层，开始对比数据信息");
        System.out.println(user_name);
        System.out.println(user_pwd);
        //查询数据库user表中的所有数据
        List<User>list = userDao.selectUser();

        boolean flag = false;
        //遍历并对比每一条数据与传递过来的参数
        for (User user:list) {
            if (user.getUser_name().equals(user_name) && user.getUser_pwd().equals(user_pwd)){
                System.out.println("匹配成功，允许登录！！！");
                flag = true;
            }else {
                System.out.println("匹配失败，不允许登录.....");
            }
        }
        /*
         * 返回值：
         *      true：允许登录
         *      false：不允许登录
         */
//        System.out.println(flag);
        if (flag){
            return true;
        }else {
            return false;
        }
    }

    //注册方法
    @Override
    public boolean register(User user) {
        System.out.println("进入service层，执行添加用户的操作");
        userDao.addUser(user);
        return true;
    }


}
