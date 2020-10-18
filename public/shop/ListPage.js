import { SCREEN_WIDTH } from '../util/Screen'

/**
 * 添加信用卡
 */

let PHONE_SCREEN_WIDTH
function px2dp(uiElementPx) {
  return uiElementPx * PHONE_SCREEN_WIDTH / SCREEN_WIDTH
}

export default function ListPage(req, res) {
  let params = req.query
  console.log(params)
/*  let screen_width = req.body.screen_width || 720
  PHONE_SCREEN_WIDTH = req.body.screen_width
  console.log('PHONE_SCREEN_WIDTH=' + PHONE_SCREEN_WIDTH)

  let response = req.body.response*/

  let data = {
    'header':{
      'title':'商品列表',
      'hideRight':false,
      'hideLeft':true
    },
    'name':'Product2Card',
    'items': [
      {item1:{imgUrl: 'http://123.56.254.117:9000/shop/item01.png', desc:'巴掌大小迷你胖乎壶，1L大肚腩的保温壶', price:'￥79'},
        item2:{imgUrl: 'http://123.56.254.117:9000/shop/item02.png', desc:'精致迷你破壁机350mL', price:'￥299'}},
      {item1:{imgUrl: 'http://123.56.254.117:9000/shop/item03.png', desc:'精致吹风机', price:'￥229'},
        item2:{imgUrl: 'http://123.56.254.117:9000/shop/item04.png', desc:'龙胆黄酒', price:'￥68'}},
      {item1:{imgUrl: 'http://123.56.254.117:9000/shop/item05.png', desc:'菲律普电动牙刷', price:'￥199'},
        item2:{imgUrl: 'http://123.56.254.117:9000/shop/item06.png', desc:'透气记忆枕', price:'￥78'}},
      {item1:{imgUrl: 'http://123.56.254.117:9000/shop/item07.png', desc:'办公室午休神器，无线穴位指压按摩器', price:'￥369'},
        item2:{imgUrl: 'http://123.56.254.117:9000/shop/item10.png', desc:'气泡理疗按摩泡脚', price:'￥319'}},
      {item1:{imgUrl: 'http://123.56.254.117:9000/shop/item08.png', desc:'精美礼盒款，中秋送礼必备，无烟便携艾灸盒', price:'￥58'},
        item2: {imgUrl: 'http://123.56.254.117:9000/shop/item09.png', desc:'中医馆里的调养专家，智能立式艾灸器', price:'￥799'}},
      {item1:{imgUrl: 'http://123.56.254.117:9000/shop/item01.png', desc:'巴掌大小迷你胖乎壶，1L大肚腩的保温壶', price:'￥79'},
        item2:{imgUrl: 'http://123.56.254.117:9000/shop/item02.png', desc:'精致迷你破壁机350mL', price:'￥299'}},
      {item1:{imgUrl: 'http://123.56.254.117:9000/shop/item03.png', desc:'精致吹风机', price:'￥229'},
        item2:{imgUrl: 'http://123.56.254.117:9000/shop/item04.png', desc:'龙胆黄酒', price:'￥68'}},
      {item1:{imgUrl: 'http://123.56.254.117:9000/shop/item05.png', desc:'菲律普电动牙刷', price:'￥199'},
        item2:{imgUrl: 'http://123.56.254.117:9000/shop/item06.png', desc:'透气记忆枕', price:'￥78'}},
      {item1:{imgUrl: 'http://123.56.254.117:9000/shop/item07.png', desc:'办公室午休神器，无线穴位指压按摩器', price:'￥369'},
        item2:{imgUrl: 'http://123.56.254.117:9000/shop/item10.png', desc:'气泡理疗按摩泡脚', price:'￥319'}},
      {item1:{imgUrl: 'http://123.56.254.117:9000/shop/item08.png', desc:'精美礼盒款，中秋送礼必备，无烟便携艾灸盒', price:'￥58'},
        item2: {imgUrl: 'http://123.56.254.117:9000/shop/item09.png', desc:'中医馆里的调养专家，智能立式艾灸器', price:'￥799'}},
    ],
    "cards":[
      {
        "name": "EntryCard",
        "data": {
          "leftText": 'ListPage刷新本页面',
          'showRightImage':true,
          "navigate" : {"type":"handle", "method": "host_refresh" }
        }
      }
    ]
  }
  res.send({ returnCode: '200', data: data, page: "ListPage" })
}

