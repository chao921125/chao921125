import Mock from 'mockjs';

export default Mock.mock('http://platform.breadoffer.com/api/oversea', {
    "data":{
        "breadActivities|9":[{
            "title":"@csentence(5,25)",
            "desc":"@paragraph(2)",
            "beiginTime":"@date",
            "endTime":"@date",
            "stateName":"进行中",
        }],
    }
})
