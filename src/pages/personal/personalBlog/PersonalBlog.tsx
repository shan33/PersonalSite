import * as React from 'react';
import './personalBlog.less';
import { getBlogList } from './service';

export function PersonalBlog() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    initData();
    return () => {};
  }, [])

  function  initData() {
    getBlogList().then(res => setBlogs(res));
  }
  return (
    <div className="dark flex column overflow-y">
      {
        blogs.map((item, index) => <Blog key={index} title={item.title} content={item.content} />)
      }
    </div>
  )
}

function Blog(props) {
  const { title, content } = props;

  return (
    <div className="blog pad-10">
      <p className="blog-title text-20">{title}</p>
      <p className="blog-content text-14">{content}</p>
    </div>
  )
}