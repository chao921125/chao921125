package cn.gok.controller;

import cn.gok.tools.VCodeUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("VCodeController")
public class VCodeController {


    @RequestMapping("/VCode")
    public void test(HttpServletRequest request, HttpServletResponse response){
        VCodeUtils vc = new VCodeUtils();
        try {
            request.getSession();
            //保存图片并输出到页面
            vc.saveImage(vc.getImage(), response.getOutputStream());
            String sb = vc.getText();
            request.getSession().setAttribute("Vcode", sb);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
