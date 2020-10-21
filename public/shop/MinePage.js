import { SCREEN_WIDTH } from '../util/Screen'

/**
 * 添加信用卡
 */

let PHONE_SCREEN_WIDTH
function px2dp(uiElementPx) {
  return uiElementPx * PHONE_SCREEN_WIDTH / SCREEN_WIDTH
}

export default function MinePage(req, res) {
  let params = req.query
  console.log(params)
/*  let screen_width = req.body.screen_width || 720
  PHONE_SCREEN_WIDTH = req.body.screen_width
  console.log('PHONE_SCREEN_WIDTH=' + PHONE_SCREEN_WIDTH)

  let response = req.body.response*/

  let data = {
    'header':{
      'title':'我的页面',
      'hideRight':false,
      'hideLeft':true
    },
    "cards":[
      {
        "name": 'UserCard',
        "data": {
          "title": 'UserCard',
        }
      },
      {
        "name": 'Item3Card',
        "data": {
          "title": 'Item3Card',
        }
      },
      {
        "name": 'Item4Card',
        "data": {
          "title": 'Item4Card',
        }
      },
      {
        "name": "EntryCard",
        "data": {
          "leftText": '我的收货地址',
          "leftImage":"http://123.56.254.117:9000/shop/address.png",
          'showRightImage':true
        }
      },
      {
        "name": "EntryCard",
        "data": {
          "leftText": '帮助反馈',
          "leftImage":"http://123.56.254.117:9000/shop/help.png",
        }
      },
      {
        "name": "EntryCard",
        "data": {
          "leftText": '设置',
          "leftImage":"http://123.56.254.117:9000/shop/setting.png",
          'showRightImage':true
        }
      },
      {
        "name": "EntryCard",
        "data": {
          "leftImage":"http://123.56.254.117:9000/shop/laboratory.png",
          "leftText": '新功能实验室',
        }
      },
      {
        "name": "EntryCard",
        "data": {
          "leftText": '关于我们',
          "leftImage":"http://123.56.254.117:9000/shop/aboutme.png",
          'showRightImage':true
        }
      },
    ]
  }
  res.send({ returnCode: '200', data: data, page: "MinePage" })
}

