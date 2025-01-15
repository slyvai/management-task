import './App.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PostForm from './component/PostForm'
import PostList from './component/PostList'
import PostItem from './component/PostItem'

function App() {
  const [post, setPost] = useState([])
  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPost(response.data)
  }

  const addPost = (post) => {
    setPost([...post])
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
