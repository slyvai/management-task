import './App.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PostForm from './component/PostForm'
import PostList from './component/PostList'

function App() {
  const [post, setPost] = useState([])
  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPost(response.data)
  } catch (error) {
    console.log("failed to fetch posts", error)
  }
  }

  const addPost = (newPost) => {
    setPost((prevPosts) => [newPost, ...prevPosts]);
  }


  return (
    <>
    <div className='container'>
      <h1>Post Management App</h1>
      <PostForm
      addPost={addPost}
      />
      <PostList
      posts = {post}
      />
    </div>
       
    </>
  )
}

export default App
