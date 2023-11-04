const Post=require('../Models/Post');

exports.addPost=async (req,res)=>{
    const {blogtitle,blogauthor,blogcontent}=req.body;
    console.log(blogauthor,blogauthor,blogcontent)
    if(!blogtitle||!blogcontent||!blogauthor){
        return res.status(402).json({
            success:false,
            message:"plz fill all the fields"
        });
    }
    Post.create({blog_author:blogauthor,blog_content:blogcontent,blog_title:blogtitle}).then((result) => {
        return res.status(200).json({
            success:true,
            message:"comment is created successfully",
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

exports.getAllPost=async (req,res)=>{
    await Post.findAll().then((result)=>{
       console.log(result.data);
       return res.status(200).json({
        success:true,
        message:"posted fetched successfully",
        data:result,
       })
      
    }).catch((error)=>{
       return res.status(404).json({
        success:false,
        message:"something went wrong"
       })
    })
}