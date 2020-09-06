import { http } from './../../../utils/http';


/** 获取日志内容 */
function getBlogList() {
  return http({
    url: '/home/blog',
    type: 'post',
    param: {}
  });
}

export { getBlogList };
