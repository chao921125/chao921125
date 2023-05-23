package cn.gok.entity;

public class User {
    private int user_id;
    private String user_name;
    private String user_pwd;
    private String user_tel;
    private String user_email;
    private int user_role;

    public User() {
    }

    public User(int user_id, String user_name, String user_pwd, String user_tel, String user_email, int user_role) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_pwd = user_pwd;
        this.user_tel = user_tel;
        this.user_email = user_email;
        this.user_role = user_role;
    }

    public User(String user_name, String user_pwd, String user_tel, String user_email, int user_role) {
        this.user_name = user_name;
        this.user_pwd = user_pwd;
        this.user_tel = user_tel;
        this.user_email = user_email;
        this.user_role = user_role;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_pwd() {
        return user_pwd;
    }

    public void setUser_pwd(String user_pwd) {
        this.user_pwd = user_pwd;
    }

    public String getUser_tel() {
        return user_tel;
    }

    public void setUser_tel(String user_tel) {
        this.user_tel = user_tel;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public int getUser_role() {
        return user_role;
    }

    public void setUser_role(int user_role) {
        this.user_role = user_role;
    }


    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", user_name='" + user_name + '\'' +
                ", user_pwd='" + user_pwd + '\'' +
                ", user_tel='" + user_tel + '\'' +
                ", user_email='" + user_email + '\'' +
                ", user_role=" + user_role +
                '}';
    }
}
