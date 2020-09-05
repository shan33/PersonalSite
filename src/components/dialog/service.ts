import { http } from './../../utils/http';

/** 新增评论 */
function insertComment() {
  return http({
    url: '/home/insertComment',
    type: 'post',
    param: {
      user: 'test1',
      content: 'comment1'
    }
  })
}


/** 新增旅行 */
function insertTravel() {
  return http({
    url: '/home/insertTravelInfo',
    type: 'post',
    param: {
      startTime: '2020-1-1',
      endTime: '2020-1-1',
      country: 'china',
      city: 'hangzhou',
      pics: '',
      content: 'test1',
      partner: 'no'
    }
  });
}

/** 新增日志 */
function insertBlog() {
  return http({
    url: '/home/insertBlog',
    type: 'post',
    param: {
      title: 'test1',
      content: 'test1'
    }
  })
}

/** 新增命令 */
function insertTerminal() {
  return http({
    url: '/home/insertTerminal',
    type: 'post',
    param: {
      request: 'test1',
      response: 'test1'
    }
  })
}

export { insertComment, insertTerminal, insertBlog, insertTravel };
