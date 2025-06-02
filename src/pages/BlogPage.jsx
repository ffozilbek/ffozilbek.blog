import {BlogsCard, GetDate} from "../components"
import { useFetch } from "../hooks/useFetch";

const BlogPage = () => {
  const {data,loading,error} = useFetch('https://683d8dd8199a0039e9e5f0ae.mockapi.io/posts')
console.log(data);

  return (
    <div>
      <h1 className="text-center text-[2rem] text-heading font-heading font-semibold mb-[30px]">
        Blogs
      </h1>
      <div className="w-[100px] mx-auto text-center mb-[20px] bg-orange text-white font-semibold rounded-[10px]">
        2025
      </div>
      {loading ? 'Loading...' : <div className="flex flex-col gap-y-[20px]">
        {data && data.reverse().map((item) => (<BlogsCard key={item.id} title={item.title} id={item.id} date={<GetDate isoDate={item.createdAt}/>}/>))}
      </div>}
    </div>
  );
};

export default BlogPage;
