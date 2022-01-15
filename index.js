import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app=express();
dotenv.config();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes);
//Memories and Memories123
// const CONNECTION_URL="mongodb+srv://Memories:Memories123@cluster0.gwhwv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL ,{
    
}).then(()=>app.listen(PORT,()=>
console.log(`Server running on port ${PORT}`)
)).catch((err)=>console.log(err.message));