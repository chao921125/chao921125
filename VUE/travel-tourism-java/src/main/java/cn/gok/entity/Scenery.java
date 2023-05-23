package cn.gok.entity;

public class Scenery {
    private int scenery_id;//景点id
    private String scenery_picurl;//景点图片
    private String scenery_startcity;//出发城市
    private String scenery_content;//景点描述
    private double scenery_price;//景点价格
    private String scenery_type;//景点类型
    private String scenery_directory;//行程介绍

    public Scenery() {
    }

    public Scenery(int scenery_id, String scenery_picurl, String scenery_startcity, String scenery_content, double scenery_price, String scenery_type, String scenery_directory) {
        this.scenery_id = scenery_id;
        this.scenery_picurl = scenery_picurl;
        this.scenery_startcity = scenery_startcity;
        this.scenery_content = scenery_content;
        this.scenery_price = scenery_price;
        this.scenery_type = scenery_type;
        this.scenery_directory = scenery_directory;
    }

    public int getScenery_id() {
        return scenery_id;
    }

    public void setScenery_id(int scenery_id) {
        this.scenery_id = scenery_id;
    }

    public String getScenery_picurl() {
        return scenery_picurl;
    }

    public void setScenery_picurl(String scenery_picurl) {
        this.scenery_picurl = scenery_picurl;
    }

    public String getScenery_startcity() {
        return scenery_startcity;
    }

    public void setScenery_startcity(String scenery_startcity) {
        this.scenery_startcity = scenery_startcity;
    }

    public String getScenery_content() {
        return scenery_content;
    }

    public void setScenery_content(String scenery_content) {
        this.scenery_content = scenery_content;
    }

    public double getScenery_price() {
        return scenery_price;
    }

    public void setScenery_price(double scenery_price) {
        this.scenery_price = scenery_price;
    }

    public String getScenery_type() {
        return scenery_type;
    }

    public void setScenery_type(String scenery_type) {
        this.scenery_type = scenery_type;
    }

    public String getScenery_directory() {
        return scenery_directory;
    }

    public void setScenery_directory(String scenery_directory) {
        this.scenery_directory = scenery_directory;
    }
}
