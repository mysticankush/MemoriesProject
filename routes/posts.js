import express from 'express';
const router=express.Router();
import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';
router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost);//patch is used to update the existing data
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);
export default router;