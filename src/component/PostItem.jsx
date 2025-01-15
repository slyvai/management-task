import React from "react";

function postItem({post}) {
  return (
    <>
   <div className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
   </>
  )
}

export default postItem