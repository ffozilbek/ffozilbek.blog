import { useParams } from "react-router-dom";
import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { GetDate } from "../components";
import { useEffect } from "react";

const BlogPostPage = () => {
  const { id } = useParams();
  const {data:post,loading,error} = useFetch(`https://683d8dd8199a0039e9e5f0ae.mockapi.io/posts/${id}`)

  return (
    <div className="max-w-[680px] w-full sm:px-[20px] px-0 mx-auto mt-[40px]">
      {loading ? (
        "Loading..."
      ) : (
        <div className="mb-[60px]">
          <h1 className="text-[2.5rem] font-semibold text-heading capitalize mb-[5px]">
            {post.title}
          </h1>
          <div className="timer text-[14px] text-second-text mb-[30px]">{<GetDate isoDate={post.createdAt}/>}</div>
          <p className="leading-[1.5] tracking-[0.08rem] whitespace-pre-line">{post.content}</p>
        </div>
      )}

      <div className="max-w-[400px] w-full mx-auto shadow-md rounded-[10px] p-[20px] mb-[40px]">
        <h3 className="font-bold">Agar!</h3>
        Izohlaringiz bo'lsa{" "}
        <Link className="text-blue-500" to={"https://t.me/wzworld"} target="_blank">
          yozishingiz
        </Link>{" "}
        mumkin
      </div>

      <Link className="text-blue-500 underline" to={"/blog"}>
        Orqaga
      </Link>
    </div>
  );
};

export default BlogPostPage;
