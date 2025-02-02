import { useState } from "react";
import PostList from "./components/UI/PostList";
import MyButton from "./components/UI/MyButton/MyButton";
import MyInput from "./components/UI/MyInput/MyInput";
import PostForm from "./components/UI/PostForm";


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Title", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ducimus distinctio quae, voluptas sequi quisquam laboriosam labore atque eos veniam laborum pariatur sed ea temporibus nemo doloribus repudiandae architecto. Quis!" },
    { id: 2, title: "Title 2", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla repudiandae porro ipsa, maiores soluta itaque voluptatum molestias animi, iusto pariatur eius asperiores fugiat corporis reiciendis nemo corrupti voluptates libero tempore." },
    { id: 3, title: "Title 3", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ducimus distinctio quae, voluptas sequi quisquam laboriosam labore atque eos veniam laborum pariatur sed ea temporibus nemo doloribus repudiandae architecto. Quis!" },

  ])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const createPost = (post) => {
    setPosts([...posts, post])
  }

  return (
    <>
      <PostForm create={createPost}/>
      <PostList posts={posts} remove={removePost} title="Список постов" />
    </>
  );
}

export default App;
