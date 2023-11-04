const Sequelize=require('sequelize');
const sequelize=require('../Config/DbConnect');

const Post=sequelize.define('Post',{
    blog_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    blog_title:{
        type:Sequelize.STRING
    },
    blog_author:{
        type:Sequelize.STRING
    },
    blog_content:{
        type:Sequelize.STRING
    }
})

module.exports=Post;