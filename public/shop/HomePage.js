import { SCREEN_WIDTH } from '../util/Screen'

/**
 * 添加信用卡
 */

let PHONE_SCREEN_WIDTH
function px2dp(uiElementPx) {
  return uiElementPx * PHONE_SCREEN_WIDTH / SCREEN_WIDTH
}

export default function HomePage(req, res) {
  let params = req.query
  console.log(params)
/*  let screen_width = req.body.screen_width || 720
  PHONE_SCREEN_WIDTH = req.body.screen_width
  console.log('PHONE_SCREEN_WIDTH=' + PHONE_SCREEN_WIDTH)

  let response = req.body.response*/

  let data = {
    'header':{
      'title':'HomePage',
      'hideRight':true
    },
    "cards":[
      {
        "name": "EntryCard",
        "data": {
          "leftText": 'HomePage刷新本页面',
          'showRightImage':true,
          "navigate" : {"type":"handle", "method": "host_refresh" }
        }
      },
      {
        name: 'SimpleCard',
        data: {
          title: 'SimpleCard卡片',
        }
      },
      {
        name: 'EntryListCard',
        data: [
          {"conner":"","name":"活期乐","icon":"https://static.jsfund.cn/lcj/images/20200709/df642998e6ee49d587d95a4c32840c61.png",navigate : {type:'jump',"pageParas":{},"activeUrl":"","pageName":"CurrentGladScreen"}},
          {"conner":"","name":"买理财","icon":"https://static.jsfund.cn/lcj/images/20200709/1b953f9dc2ae40ce9f1bf721070eaef7.png",navigate : {type:'jump',"pageParas":{},"activeUrl":"","pageName":"FinancingChannel"}},
          {"conner":"","name":"买基金","icon":"https://static.jsfund.cn/lcj/images/20200709/a7da1aeb8d9d48a599d42c2875d3f95d.png",navigate : {type:'jump',"pageParas":{},"activeUrl":"","pageName":"FundList"}},
          {"conner":"","name":"我的关注","icon":"https://static.jsfund.cn/lcj/images/20200709/4a0ab436fd9f44f7b6ab1c447d11d609.png",navigate : {type:'jump',"pageParas":{},"activeUrl":"","pageName":"CollectionAndAttention"}},
          {"conner":"","name":"建仓宝","icon":"https://static.jsfund.cn/lcj/images/20200709/7708868d8fce4576b339e187f8de2969.png",navigate : {type:'jump',"pageParas":{},"activeUrl":"","pageName":"JcbAdd"}},
          {"conner":"","name":"工资宝","icon":"https://static.jsfund.cn/lcj/images/20200709/f88c96c27cc4492590a6779d83de6f1b.png",navigate : {type:'jump',"activeUrl":"https://static.jsfund.cn/lcj/functions/salary/salaryEntrance.html"}},
          {"conner":"","name":"定投宝","icon":"https://static.jsfund.cn/lcj/images/20200709/b04424914e334413863b5293c32027f3.png",navigate : {type:'jump',"activeUrl":"https://static.jsfund.cn/lcj/functions/zydt/indexEntrance.html"}},
          {"conner":"智盈理财","name":"预约提醒","icon":"https://static.jsfund.cn/lcj/images/20200709/018a7b539ea04f90a446a7a29be5f94a.png",navigate : {type:'jump',"activeUrl":"https://trade.jsfund.cn/dshd/wisdomIndex/index.html"}}
        ]
      }/*,
      {
        name: 'CarouselCard',
        data: [
          {"imgUrl":"https://static.jsfund.cn/lcj/images/20200711/20b2ba4f7d2c432ea1173792914ca8e5.png",navigate : {type:'jump',"pageParas":{},"activeUrl":"https://static.jsfund.cn/lcj/zipfile/share/e33f28aa0ab94a35a13ffc194e917981/index.html?envir=app","pageName":""}},
          {"imgUrl":"https://static.jsfund.cn/lcj/images/20200703/b31b1791192f41e18e4294fd85dcd596.png",navigate : {type:'jump',"pageParas":{},"activeUrl":"https://static.jsfund.cn/lcj/zipfile/share/f8f8655ed1df4726a157c329902cfeb4/index.html","pageName":""}},
          {"imgUrl":"https://static.jsfund.cn/lcj/images/20200603/cc6cab94e7124540a89353b4cc34f186.png",navigate : {type:'jump',"pageParas":{},"activeUrl":"","pageName":"JcbAdd"}},
          {"imgUrl":"https://static.jsfund.cn/lcj/images/20200603/29707956a7134d69a2267998bd576208.png",navigate : {type:'jump',"pageParas":{},"activeUrl":"https://trade.jsfund.cn/dshd/investorEducation/index.html?state=app","pageName":""}}
        ]
      }*/
    ]
  }
  res.send({ returnCode: '200', data: data, page: "HomePage" })
}

