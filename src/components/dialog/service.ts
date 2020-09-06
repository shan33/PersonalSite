import { http } from './../../utils/http';

/** 新增评论 */
function insertComment(params) {
  return http({
    url: '/home/insertComment',
    type: 'post',
    param: params
    // param: {
    //   user: 'test1',
    //   content: 'comment1'
    // }
  })
}


/** 新增旅行 */
function insertTravel(params) {
  return http({
    url: '/home/insertTravelInfo',
    type: 'post',
    param: params
    // {
    //   startTime: '2020-1-1',
    //   endTime: '2020-1-1',
    //   country: 'china',
    //   city: 'hangzhou',
    //   pics: '',
    //   content: 'test1',
    //   partner: 'no'
    // }
  });
}

/** 新增日志 */
function insertBlog(params) {
  return http({
    url: '/home/insertBlog',
    type: 'post',
    param: params
  })
}

/** 新增命令 */
function insertTerminal(params) {
  return http({
    url: '/home/insertTerminal',
    type: 'post',
    param: params
  })
}

export { insertComment, insertTerminal, insertBlog, insertTravel };
