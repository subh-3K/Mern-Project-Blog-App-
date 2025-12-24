import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BlogCard from '../componenets/BlogCard';
const Blogs = () => {
  const[blogs,setBlogs]=useState([]);
  const getAllBlogs=async ()=>{
    try {
      const {data}=await axios.get('/api/v1/blog/all-blog');
      if(data?.success){
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllBlogs();
  },[]);
  return (
    <div>
  {blogs &&
    blogs
      .filter(blog => blog && blog.user) // filter out invalid entries
      .map(blog => (
        <BlogCard
          key={blog._id}
          id={blog._id}
          isUser={localStorage.getItem('userId') === blog.user.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          username={blog.user.username}
          date={blog.user.createdAt}
        />
      ))}
</div>
  )
}

export default Blogs
