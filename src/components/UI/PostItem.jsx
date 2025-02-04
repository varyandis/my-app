import MyButton from "./MyButton/MyButton";


const PostItem = ({ posts, remove }) => {
  return (
    <>
      {posts.map((post, index) => {
        return (
          <article key={post.id} style={
            {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "1000px",
              margin: "15px auto",
              border: "solid 2px rgb(237, 150, 226)",
              padding: "10px"
            }
          }>
            <div>
              <span>{index + 1}. {post.title}</span>
              <p>{post.body}</p>
            </div>
            <MyButton children='Удалить' onClick={() => remove(post)} />
          </article>
        )
      })}
    </>
  )
}

export default PostItem;