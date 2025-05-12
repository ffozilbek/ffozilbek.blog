import { useNavigate } from "react-router"

const BlogsCard = ({title,content,date,img,id}) => {
    const navigate = useNavigate()
    const dateStr = date
    const myDate = new Date(dateStr)

    // O'zgartirish
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = myDate.toLocaleDateString('en-GB', options);

  return (
    <div className="flex flex-col bg-white shadow-sm px-[20px] py-[10px] rounded-[10px] hover:shadow-md transition-shadow duration-75 ease-in cursor-pointer" onClick={()=> navigate(`/posts/${id}`)}>
        <h3 className="order-2 text-[20px] font-medium capitalize">{title}</h3>
        <p className="order-1 text-[14px] text-second-text">{formattedDate}</p>
    </div>
  )
}

export default BlogsCard