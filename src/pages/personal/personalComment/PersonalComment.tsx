import * as React from 'react';
import './personalComment.less';
import { getCommentList } from './service';

export function PersonalComment() {
  const [comment, setComment] = React.useState([]);

  React.useEffect(() => {
    getCommentList().then(res => setComment(res)).catch(error => {});
    return () => {};
  }, [])

  return (
    <div className="dark flex column overflow-y">
      {
        comment.map((item, index) => <Comment key={index} title={item.user} content={item.content} />)
      } 
    </div>
  )
}

function Comment(props) {
  const { title, content, date } = props;

  return (
    <div className="comment pad-10">
      <p className="comment-title text-20">{title}</p>
      <p className="comment-content text-14">{content}</p>
      <p className="text-10">{date}</p>
    </div>
  )
}