const express =require('express');
const { getAllBlogController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController ,userBlogController } = require('../controller/blogBontroller');


const router=express.Router();

router.get('/all-blog',getAllBlogController);
router.post('/create-blog',createBlogController);
router.put('/update-blog/:id',updateBlogController);
router.get('/get-blog/:id',getBlogByIdController);
router.delete('/delete-blog/:id',deleteBlogController);
router.get('/user-blog/:id',userBlogController)

module.exports=router;