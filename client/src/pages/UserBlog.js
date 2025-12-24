import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BlogCard from '../componenets/BlogCard';

const UserBlog = () => {

  const[blogs,setBlogs]=useState([]);

  const getuserBlogs=async ()=>{
    try {
    const id=localStorage.getItem('userId');
      const {data}=await axios.get(`/api/v1/blog/user-blog/${id}`);
      if(data?.success){
        setBlogs(data?.userblog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getuserBlogs();
  },[]);

return (
  <div>
    {blogs && blogs.length > 0 ? (
      blogs.map((blog) => (
        <BlogCard
          id={blog._id}
          isUser={true}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          username={blog.user.username}
          date={blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : 'Unknown'}
        />
      ))
    ) : (
      <h1>You haven't created any blog</h1>
    )}
  </div>
);
}

export default UserBlog
