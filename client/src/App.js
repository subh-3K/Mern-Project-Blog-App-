import { useSelector } from 'react-redux';
import './App.css';
import Header from './componenets/Header';
import { Route,Routes } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Register from './pages/Register';
import UserBlog from './pages/UserBlog';
import CreateBlog from './pages/CreateBlog';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './componenets/Home';
import Footer from './componenets/Footer';
import BlogDetails from './pages/BlogDetails';
function App() {
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <>
    {/* <Header/>
    <Routes>
      
      <Route path='/' element={<Blogs/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/my-blogs' element={<UserBlog/>}/>
      <Route path='/create-blogs' element={<CreateBlog/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

    </Routes>
    <ToastContainer position="top-center"/> */}
    <Header />


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/my-blogs" element={<UserBlog />} />
         <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/create-blogs" element={<CreateBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer position="top-center" />

    </>
  );
}

export default App;
