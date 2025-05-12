import useFetch from "../../hooks/useFetch"
import { BlogsCard } from "../components"


const BlogPage = () => {
  const {posts,loading,error} = useFetch()

  return (
    <div>
      <h1 className="text-center text-[2rem] text-heading font-heading font-semibold mb-[30px]">Blogs</h1>
      <div className="flex flex-col gap-y-[20px]">
        {!loading && posts.map(item=> (
        <BlogsCard key={item.id} title={item.title} content={item.content} date={item.createdAt} img={item.imageUrl} id={item.id}/>
      ))}
      </div>
    </div>
  )
}

export default BlogPage