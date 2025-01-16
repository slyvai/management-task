import React from "react";


function PostList ({posts}) {
  return (
    <>
    <h2>Recent Post</h2>
    <div>
      {posts.map((post, index) => 
      <div key={index} className="post-list">
         <h3>{post.title}</h3>
         <p>{post.body}</p>
      </div>
      )}
    </div>
    </>
  )
}

export default PostList;