import { useState, useMemo } from "react";
import PostList from "./components/UI/PostList";
import MyButton from "./components/UI/MyButton/MyButton";
import MyInput from "./components/UI/MyInput/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/MySelect/MySelect";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Title", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ducimus distinctio quae, voluptas sequi quisquam laboriosam labore atque eos veniam laborum pariatur sed ea temporibus nemo doloribus repudiandae architecto. Quis!" },
    { id: 2, title: "Title 2", body: "Lorem, dolor sit amet consectetur adipisicing elit. Nulla repudiandae porro ipsa, maiores soluta itaque voluptatum molestias animi, iusto pariatur eius asperiores fugiat corporis reiciendis nemo corrupti voluptates libero tempore." },
    { id: 3, title: "Title 3", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ducimus distinctio quae, voluptas sequi quisquam laboriosam labore atque eos veniam laborum pariatur sed ea temporibus nemo doloribus repudiandae architecto. Quis!" },

  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [seachQuery, setSearchQuery] = useState('')

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }


const sortedPosts = useMemo(() => {
  if (selectedSort) {
    return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
  }
  return posts

}, [selectedSort, posts])

const sortedAndSearchedPosts = useMemo(() => {
  console.log(seachQuery)
  return sortedPosts.filter((post) => post.title.toLowerCase().includes(seachQuery.toLowerCase()))
}, [sortedPosts, seachQuery])



  return (
    <>
      <PostForm create={createPost} />
      <hr style={{ margin: "15px auto", maxWidth: "1000px" }} />

      <MyInput placeholder='Поиск...' value={seachQuery} onChange={(e) => {setSearchQuery(e.target.value)}}/>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка' options={[
          { title: "По заголовку", name: "title" },
          { title: "По описанию", name: "body" }
        ]} />
      <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Список постов" />
    </>
  );
}

export default App;
