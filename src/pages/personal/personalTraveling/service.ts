import { http } from './../../../utils/http';

/** 获取基旅行信息 */
function getTravelList() {
  return http({
    url: '/home/travel',
    type: 'post',
    param: {}
  });
}



export { getTravelList };
