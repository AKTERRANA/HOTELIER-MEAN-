const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    
    },
    imgUrl: {
        type:String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})
module.exports = {Blog: mongoose.model('blog', blogSchema)};