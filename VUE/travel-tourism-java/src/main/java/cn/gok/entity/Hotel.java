package cn.gok.entity;

public class Hotel {
    private int hotel_id;//酒店id
    private String hotel_name;//酒店名
    private String hotel_picurl;//酒店图片链接
    private String hotel_address;//酒店地址
    private String hotel_suggest;//酒店简介
    private double hotel_price;//酒店价格
    private double hotel_score;//酒店评分

    //无参构造
    public Hotel() {
    }

    //有参构造

    public Hotel(int hotel_id, String hotel_name, String hotel_picurl, String hotel_address, String hotel_suggest, double hotel_price, double hotel_score) {
        this.hotel_id = hotel_id;
        this.hotel_name = hotel_name;
        this.hotel_picurl = hotel_picurl;
        this.hotel_address = hotel_address;
        this.hotel_suggest = hotel_suggest;
        this.hotel_price = hotel_price;
        this.hotel_score = hotel_score;
    }


    //get和set方法


    public int getHotel_id() {
        return hotel_id;
    }

    public void setHotel_id(int hotel_id) {
        this.hotel_id = hotel_id;
    }

    public String getHotel_name() {
        return hotel_name;
    }

    public void setHotel_name(String hotel_name) {
        this.hotel_name = hotel_name;
    }

    public String getHotel_picurl() {
        return hotel_picurl;
    }

    public void setHotel_picurl(String hotel_picurl) {
        this.hotel_picurl = hotel_picurl;
    }

    public String getHotel_address() {
        return hotel_address;
    }

    public void setHotel_address(String hotel_address) {
        this.hotel_address = hotel_address;
    }

    public String getHotel_suggest() {
        return hotel_suggest;
    }

    public void setHotel_suggest(String hotel_suggest) {
        this.hotel_suggest = hotel_suggest;
    }

    public double getHotel_price() {
        return hotel_price;
    }

    public void setHotel_price(double hotel_price) {
        this.hotel_price = hotel_price;
    }

    public double getHotel_score() {
        return hotel_score;
    }

    public void setHotel_score(double hotel_score) {
        this.hotel_score = hotel_score;
    }
}
