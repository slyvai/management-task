import React, {useState} from "react";
import axios from "axios";

function PostForm({addPost}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body
      })
      .then((res) => {
        console.log(res);
        const newPost = { title, body };
        addPost(newPost);
        setTitle('');
        setBody('');
      })
      .catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="title-input"
          type="text"
          placeholder="Post Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="body-input"
          type="text"
          rows={10}
          cols={10}
          placeholder="Post Body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default PostForm;
