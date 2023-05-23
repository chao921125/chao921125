var sql = {
    user:{
        login: 'select * from `User` where User.userId = ? and User.userPassword = ?',
        register: 'insert into travel1.`User` ( userId,userNickName, userPassword, userPhone) VALUES(?, ?, ?, ?)',
        checkRegister: 'select userId from `User` where userId = ?',
        getName: 'select userNickName from `User` where userId = ?',
        showUserInfo: 'select * from `User` where userId = ?',
//@ChenFangJin传入用户，景点，数量，日期，时间，价格由数量x景点查询到票价
        buyTicket: 'insert into Purchase ( userId, spotId, purchaseDate, purchaseNumber) VALUES( ?, ?, ?, ?)',
        checkBuyTicket: 'select purchaseId from Purchase where userId = ? and spotId = ? and purchaseDate = ?',
//@ChenFangJin只对同一游玩日期的订单加购，否则使用购票接口生成订单。
        buyTicketAgain: 'update Purchase set Purchase.purchaseNumber=Purchase.purchaseNumber + ? where userId = ? \
         and spotId= ? and purchaseDate = ?',
//@ChenFangJin不考虑买了两张同一天的票只退一张，只能全退
        cancelBuyTicket: 'delete from Purchase where userId = ? and spotId = ? and purchaseDate = ?',
        addCollection: 'insert into Collection (userId,spotId)values(?,?)',
        cancelCollection: 'delete from Collection where Collection.userId = ? and Collection.spotId = ?'
    },

    spot: {
            //展示同城景点
        showCitySpot: 'select * from Spot where cityId = ?',
//@ChenFangJin从同城景点将景点按热度降序、首字母升序排列，只显示前4      
        showHotCitySpot: 'select spotId,spotName,spotImage from Spot where \
        cityId = ?\
         order by Spot.spotPurchasedNumber desc,Spot.spotName asc limit 4',
        showSpotInfo: 'select * from Spot where Spot.spotId = ?',
//@ChenFangJin购票后，景点热度（purchasedNumber）+1
        buyTicketAfter: 'update Spot set Spot.spotPurchasedNumber=Spot.spotPurchasedNumber+? where spotId = ?',
        cancelTicketAfter: 'update Spot set Spot.spotPurchasedNumber=Spot.spotPurchasedNumber-? where spotId = ?',
//关键字搜索景点 景点名、城市、标签
        searchSpot:'select spotId from Spot where spotName = ?'
    },

    purchase:{
//展示购物清单和去过的区别是，设置一个函数在每个订单的v-if里面,判断订单日期和现有日期，
        showPurchasingList: 'select Purchase.*,Spot.spotPrice,Spot.spotName,Spot.spotImage from Purchase inner join Spot on\
        Spot.spotId = Purchase.spotId where userId = ?',
        showPurchasingList1: 'select Purchase.*,Spot.spotPrice,Spot.spotName,Spot.spotImage1,Spot.spotNameEng,Spot.spotPurchasedNumber from Purchase inner join Spot on\
        Spot.spotId = Purchase.spotId where userId = ?',        
//如果还没到现有日期，则展示在购物清单界面,如果已经超过订单日期，则展示在去过的界面
        searchSpotDate: 'select purchaseDate from Purchase where userId = ? and spotId = ?'
    },
    collection:{
//@ChenFangJin联表查询Collection和Spot，查询用户已经收藏的所有景点
        showCollection: 'select Spot.* from Spot,Collection\
         where Collection.spotId = Spot.spotId\
         and Collection.userId = ?',
//在查看收藏界面搜索，或者用来判断是否收藏过，进而通过select出来的长度是否为零判断是否收藏，展示在景点详情界面
        searchCollection: 'select Spot.spotName,Spot.spotIntroduce,Spot.spotPrice, Spot.spotImage,Spot.spotTime1,Spot.spotTime2 from Spot,Collection\
        where Collection.spotId = Spot.spotId\
        and Collection.userId = ? and Collection.spotId = ?'
    },

    city:{
//展示城市列表
        showCity:'select * from City',
//展示热门城市名字
//@ChenFangJin通过每个城市内所有景点购票数总和，将城市所有PurchasedNumber降序排序，相同PurchasedNumber城市名升序
        showHotCity: 'select City.cityName as cityName, City.cityImage as cityImage, City.cityId as cityId,\
        SUM(Spot.spotPurchasedNumber) as cityPurchasedSum          \
        from City inner join Spot on Spot.cityId = City.cityId         \
        group by City.cityName \
         order by cityPurchasedSum desc,City.cityName asc limit 4',
//@ChenFangJin查某个景点的所属城市
        getCityName1: 'select c.cityName as cityName from City c join Spot s on \
        c.cityId = s.cityId where s.spotId = ?',
//通过cityId获取城市名
        getCityName2: 'select cityName from City where cityId = ?'

    },
}

module.exports = sql;