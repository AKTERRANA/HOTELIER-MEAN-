const { Blog } = require("../model/blogModel");

module.exports ={
    getBlogs: (req, res)=>{
        Blog.find().then((resp)=>{
            if(resp.length>0){
                res.status(200).json({success:true, data: resp});
            }else{
                res.status(200).json({success: false, message: "There is no data"})
            }
        }).catch((err)=>{
            res.status(500).json({success:false, message: "There is some problem in Server. Try after some time."})
        })

    },
    getSingleBlog:(req, res)=>{
        const _id = req.params.id;
        Blog.findById({_id}).then((resp)=>{
                res.status(200).json({success:true, data: resp});
           
        }).catch((err)=>{
            res.status(200).json({success:false, message: "There is some problem in Server. Try after some time."})
        })
    },
    createBlog:(req, res)=>{
        const title = req.body.values.title;
        const content = req.body.values.content;
        const imgUrl = req.body.values.imgUrl;

        const newBlog = new Blog({
          title,
          content,
          imgUrl
        })
        
        newBlog.save().then((savedData)=>{
            console.log(`New Post saved => ${savedData}`)
            res.status(200).json({ message: "New Blog saved successfully."})
        }).catch(err=>{ 
            console.log("There is an Error is saving Data", err)
            res.status(500).json({ message: "There is some problem in Server. Try after some time."})
        })
    },
    updateBlog:(req, res)=>{
        Blog.updateOne({_id: req.params.id}, 
            {$set: {title: req.body.values.title,
                 imgUrl: req.body.values.imgUrl, 
                content: req.body.values.content}
        }).then((xx)=>{
            console.log(xx)
            res.status(200).json({message: "Success"})
        }).catch(e=>{
            console.log("Error in Updating")
        })
  
    },
    deleteBlog:(req, res)=>{
        const _id = req.params.id;
        console.log("called ")
        Blog.find({_id}).then(resp=>{
            if(resp.length>0){
            Blog.findByIdAndDelete({_id}).then((deletedData=>{
                console.log(`Data deleted ${deletedData}`);
                res.status(200).json({ message: "Blog Deleted Successfully!"})
            })).catch(e=>{
                res.status(500).json({ message: "Unknown server Error!"})
            })
        }else{
            res.status(200).json({ message: "There is no such data to delele"})
        }
        }).catch(e=>{
                res.status(500).json({ message: "Unknown server Error!"})
        })
       
    }
}