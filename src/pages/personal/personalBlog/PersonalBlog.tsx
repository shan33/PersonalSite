import * as React from 'react';
import './personalBlog.less';

export function PersonalBlog() {
  return (
    <div className="sticky h-per-100 dark flex column overflow-y">
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <Blog key={item} />)
      }
    </div>
  )
}

function Blog() {
  return (
    <div className="blog">Blog</div>
  )
}