const Comment=require('../Models/Comment');

exports.addcomment=async (req,res)=>{
     const {blog_id,comment}=req.body;
     console.log(blog_id,comment);
      if(!blog_id||!comment){
        return res.status(403).json({
            success:false,
            message:"plz fill all the fields"
        });
      }

     await  Comment.create({Comment:comment,blog_id:blog_id}).then((result)=>{
        return res.status(200).json({
            success:true,
            message:"comment is created successfully",
            data:result
        })
      }).catch((error)=>{
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"something went wrong try again later"
        })
      })

    
}

exports.getAllComments=async (req,res)=>{
    const blog_id=req.params.blogid;
    console.log(blog_id)
    if(!blog_id){
        return res.status(403).json({
            success:false,
            message:"blog id is required"
        });
    }
    await Comment.findAll({
        where:{blog_id:blog_id}
    }).then((result) => {
        return res.status(200).json({
            success:true,
            message:"comment are fetched successfully",
            data:result
        })
    }).catch((error) => {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"something went wrong try again later"
        })
    });
}

