import { http } from './../../utils/http';

/** 获取基础信息 */
function getBasicInfo() {
  http({
    url: '/home/profile',
    success: (res: Object) => {
      debugger
    },
    fail: (error: any) => { },
    type: 'post',
    param: {}
  })
}

export { getBasicInfo };