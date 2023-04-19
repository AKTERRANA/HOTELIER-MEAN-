const { Product } = require("../model/ProductModel");
const ApiFeatures = require("../middlewares/apifeatures");

module.exports ={
    getProduct:async (req, res)=>{
        const resultPerPage = 8;
        const productsCount = await Product.countDocuments();
      
        const apiFeature = new ApiFeatures(Product.find(), req.query)
          .search()
          .filter();
      
        let products = await apiFeature.query;
        let filteredProductsCount = products.length;
        apiFeature.pagination(resultPerPage);
        products = await apiFeature.query;
        res.status(200).json({
          success: true,
          products,
          productsCount,
          resultPerPage,
          filteredProductsCount,
        });

    },
    getSingleProduct:(req, res)=>{
        const _id = req.params.id;
        Product.findById({_id}).then((resp)=>{
                res.status(200).json({success:true, data: resp});
           
        }).catch((err)=>{
            res.status(200).json({success:false, message: "There is some problem in Server. Try after some time."})
        })
    },
    createProduct:(req, res)=>{
        const title = req.body.values.title;
        const content = req.body.values.content;
        const imgUrl = req.body.values.imgUrl;

        const newProduct = new Product({
          title,
          content,
          imgUrl
        })
        
        newProduct.save().then((savedData)=>{
            console.log(`New Post saved => ${savedData}`)
            res.status(200).json({ message: "New Product saved successfully."})
        }).catch(err=>{ 
            console.log("There is an Error is saving Data", err)
            res.status(500).json({ message: "There is some problem in Server. Try after some time."})
        })
    },
    updateProduct:(req, res)=>{
        Product.updateOne({_id: req.params.id}, 
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
    deleteProduct:(req, res)=>{
        const _id = req.params.id;
        console.log("called ")
        Product.find({_id}).then(resp=>{
            if(resp.length>0){
            Product.findByIdAndDelete({_id}).then((deletedData=>{
                console.log(`Data deleted ${deletedData}`);
                res.status(200).json({ message: "Product Deleted Successfully!"})
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