import PostItem from "./PostItem";

const PostList = ({ posts, remove, title }) => {

  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <PostItem posts={posts} remove={remove} />
    </>
  )
}

export default PostList;