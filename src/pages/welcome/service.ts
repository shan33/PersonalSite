import { http } from './../../utils/http';

/** 获取基础信息 */
function getBasicInfo() {
  return http({
    url: '/home/profile',
    type: 'post',
    param: {}
  });
}

export { getBasicInfo };
