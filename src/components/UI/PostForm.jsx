import MyButton from "./MyButton/MyButton"
import MyInput from "./MyInput/MyInput"
import { useState } from "react"

const PostForm = ({create}) => { 

  const [post, setPost] = useState({title: '', body: ''})

  const createNewPost = (e) => {
    e.preventDefault()
    const newPost = {...post, id: Date.now()}
    create(newPost)
    setPost({title: '', body: ''})
  }

const checkFields = () => (post.title.length > 0 && post.body.length > 0) ? false : true;

  return (
    <form style={{display: 'flex',flexDirection: "column", maxWidth: "1000px", margin: "15px auto", padding: "10px"}}>
    <MyInput required placeholder="Название поста" value={post.title} name="title" onChange={(e) => {
      setPost({...post, title: e.target.value})
    }} />
    <MyInput required placeholder="Описание поста" value={post.body} name="body" onChange={(e) => {
      setPost({...post, body: e.target.value})
    }} />
    <MyButton children="Создать пост" onClick={(e) => createNewPost(e)} disabled={checkFields()} />
  </form>
  )
}

export default PostForm;