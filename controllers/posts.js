import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';
export const getPosts=async (req,res)=>{
    try{
        const postMessages=await PostMessage.find();//because it is empty thats why all the post will be seen 
        console.log(postMessages);
        res.status(200).json(postMessages);
    }
    catch(err)
    {
        res.status(404).json({message:err.message});
    }
};
export const createPost=async (req,res)=>{
    const post=req.body;//newpost from client/api/index.js will be used here as req.body
    const newpost=new PostMessage({...post,creator: req.userId});
    try{
        await newpost.save();
        res.status(201).json(newpost);
    }
    catch(err)
    {
        res.status(404).json({message:err.message});
    }
}
export const updatePost=async(req,res)=>{
    const {id:_id} = req.params;//changing name of id to _id and using _id
    const post=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
    const updatedPost=await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
    res.json(updatedPost);
}
export const deletePost=async(req,res)=>{
    const {id}=req.params;
    // console.log(req.params);
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send("No post with that id");
    await PostMessage.findByIdAndRemove(id);
    res.json({message:'Post deleted successfully'});
}
export const likePost=async (req,res)=>{
    const {id}=req.params;
    if(!req.userId) return res.json({message:'Unauthenticated'});
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("No post with that id");

    const post=await PostMessage.findById(id);
    const index=post.likes.findIndex((id)=>id===String(req.userId));//likes vector -> userId's of all the persons who liked . 6 -> 0 1 2 3 4 5
    if(index===-1)
    {
        //like the post
        post.likes.push(req.userId);
    }
    else
    {
        //dislike the post
        post.likes=post.likes.filter((id)=>id!==String(req.userId));
    }
    const updatedPost=await PostMessage.findByIdAndUpdate(id,post,{new:true});
    res.status(200).json(updatedPost);
}