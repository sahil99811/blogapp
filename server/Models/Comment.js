const Sequelize=require('sequelize');
const sequelize=require('../Config/DbConnect');

const Comment=sequelize.define('Comment',{
    Comment_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Comment:{
        type:Sequelize.STRING
    },
    blog_id:{
        type:Sequelize.INTEGER
    }
})

module.exports=Comment;