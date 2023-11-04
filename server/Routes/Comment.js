const express=require('express');
const router=express.Router();
const {addcomment,getAllComments}=require('../Controllers/Comment');
router.post('/addcomment',addcomment);
router.get('/getallcomment/:blogid',getAllComments);
module.exports=router;