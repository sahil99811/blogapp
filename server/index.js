const express=require('express');
const app=express();
const postRoutes=require('./Routes/Post');
const commentRoutes=require('./Routes/Comment');
const Post=require('./Models/Post');
const Comment=require('./Models/Comment')
const cors = require("cors");
app.use(express.json());
app.use(postRoutes);
app.use(commentRoutes);
Post.sync();
Comment.sync();
app.use(
	cors({
		origin:"http://192.168.1.4:3000",
		credentials: true
	})
)
app.listen(4000,()=>{
    console.log("server is started");
})