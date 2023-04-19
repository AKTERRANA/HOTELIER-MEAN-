require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const blogRouter = require("./routers/blogRouter");
const userRouter = require("./routers/userRouter")
const hotelRouter = require("./routers/hotelRouter")

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const corsOptions = {
    exposedHeaders: 'Authorization',
  };
app.use(cors(corsOptions))


// MONGOOSE
const mongoUrl = process.env.MONGODB_URL;
mongoose.set('strictQuery', true);
mongoose.connect(`${mongoUrl}`, ()=>{
    console.log('MONGODB CONNECTED SUCCESSFULLY.')
}).catch((e)=>{
    console.log("ERROR IN MONGODB =>", e)
})


app.use("/api",  blogRouter);
// app.use("/api/products", )
app.use("/api/user", userRouter );
app.use("/api/hotel", hotelRouter)

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running at PORT ${port}`)
})