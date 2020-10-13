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
      'title':'我的页面1111233',
      'hideRight':true
    },
    "cards":[
      {
        "name": "EntryCard",
        "data": {
          "leftText": '刷新本页面',
          'showRightImage':true,
          "navigate" : {"type":"handle", "method": "host_refresh" }
        }
      },
      {
        "name": "EntryCard",
        "data": {
          "leftText": '关于',
          'showRightImage':true
        }
      },
      {
        "name": "EntryCard",
        "data": {
          "leftText": '联系开发者',
          'showRightImage':true
        }
      },
    ]
  }
  res.send({ returnCode: '200', data: data, page: "MinePage" })
}

