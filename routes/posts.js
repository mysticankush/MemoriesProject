import express from 'express';
const router=express.Router();
import auth from '../middleware/auth.js';
import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';
router.get('/',getPosts);//http://localhost:5000/posts/
router.post('/',auth,createPost);
router.patch('/:id',auth,updatePost);//patch is used to update the existing data , route->//http://localhost:5000/posts/abc
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);//http://localhost:5000/posts/abc/likePost
export default router;