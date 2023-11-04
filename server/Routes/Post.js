const express=require('express');
const router=express.Router();
const {addPost,getAllPost}=require('../Controllers/Post');

router.post('/addpost',addPost);
router.get('/getallpost',getAllPost);
module.exports=router;