import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Viewsni oshirish
    axios.put(`http://localhost:3000/api/posts/${id}/view`);

    // Postni olish
    axios
      .get(`http://localhost:3000/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  const dateStr = post.createdAt;
  const myDate = new Date(dateStr);

  // O'zgartirish
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = myDate.toLocaleDateString("en-GB", options);

  return (
    <div className="max-w-[680px] w-full sm:px-[20px] px-0 mx-auto mt-[40px]">
      <div className="mb-[60px]">
        <h1 className="text-[2.5rem] font-semibold text-heading capitalize mb-[10px]">
          {post.title}
        </h1>
        <p className="timer text-gray-500 mb-[30px]">{formattedDate}</p>
        <p className="leading-[1.5] tracking-wide whitespace-pre-line">{post.content}</p>
      </div>
      <div className="max-w-[400px] w-full mx-auto shadow-md rounded-[10px] p-[20px] mb-[20px]">
        <h3 className="font-bold">Agar!</h3>
        Izohlaring bo'lsa <Link className="text-blue-500" to={'https://t.me/wzworld'} target="_blank">yozishingiz</Link> mumkin
      </div>
      <Link className="text-blue-500 underline" to={"/blog"}>
        Orqaga
      </Link>
    </div>
  );
};

export default BlogPostPage;
