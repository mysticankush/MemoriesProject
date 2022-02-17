import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app=express();
dotenv.config();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());//Cross-origin resource sharing (CORS) is a mechanism implemented in web browsers to allow or deny requests coming from a different domain to your web app
app.use('/posts',postRoutes);//posts will append in first for every route in posts route
app.use('/user',userRoutes);
app.get("/",(req,res)=>{
    res.send("Hello to memories api");
})
//Memories and Memories123
//const CONNECTION_URL="mongodb+srv://Memories:Memories123@cluster0.gwhwv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL ,{
}).then(()=>app.listen(PORT,()=>
console.log(`Server running on port ${PORT}`)
)).catch((err)=>console.log(err));