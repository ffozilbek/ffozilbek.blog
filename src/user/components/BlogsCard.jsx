import { useNavigate } from "react-router";

const BlogsCard = ({ title,id,date }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col bg-white shadow-sm px-[20px] py-[10px] rounded-[10px] hover:shadow-md transition-shadow duration-75 ease-in cursor-pointer"
      onClick={() => navigate(`/posts/${id}`)}
    >
      <h1 className="order-2 text-heading capitalize leading-[2] tracking-wide">{title}</h1>
      <div className="order-1 text-[14px] text-second-text">{date}</div>
    </div>
  );
};

export default BlogsCard;
