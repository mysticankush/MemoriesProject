import express from 'express';
const router=express.Router();
import auth from '../middleware/auth.js';
import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';
router.get('/',getPosts);
router.post('/',auth,createPost);
router.patch('/:id',auth,updatePost);//patch is used to update the existing data
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);

export default router;