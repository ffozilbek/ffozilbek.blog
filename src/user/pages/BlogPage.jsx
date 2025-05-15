import db from "../../db/database.json";
import {BlogsCard} from "../components"

const BlogPage = () => {
  return (
    <div>
      <h1 className="text-center text-[2rem] text-heading font-heading font-semibold mb-[30px]">
        Blogs
      </h1>
      <div className="w-[100px] mx-auto text-center mb-[20px] bg-orange text-white font-semibold rounded-[10px]">
        2025
      </div>
      <div className="flex flex-col gap-y-[20px]">
        {db.map((item) => (<BlogsCard key={item.id} title={item.title} id={item.id} date={item.date}/>))}
      </div>
    </div>
  );
};

export default BlogPage;
