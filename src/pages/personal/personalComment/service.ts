import { http } from '../../../utils/http';


/** 获取日志内容 */
function getCommentList() {
  return http({
    url: '/home/comment',
    type: 'post',
    param: {}
  });
}

export { getCommentList };
