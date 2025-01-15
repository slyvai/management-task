import React, {useState} from "react";
import axios from "axios";



function PostForm({addPost}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const handleSubmit =  (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: title,
      body: body
    })
    .then((res) => {
   console.log(res)
   setTitle('')
   setBody('')
    })
    .catch((err) => {
     console.log(err)
   })
  }
  

    return (
      <div className="form-container">
        <form>
        <input className="title-input" type="text" placeholder="Post Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </form>

        <form>
        <textarea className="body-input" type="text" rows={10} cols={10} placeholder="Post Body" name="body" value={body} onChange={(e) => setBody(e.target.value)}/>
        </form>
        <button onClick={handleSubmit}>Create Post</button>
      </div>
    )
}

export default PostForm;