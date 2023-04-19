const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({

  user: { type: mongoose.Schema.ObjectId,  ref: "User",  required: true},
  country:{ type: String, required: true },
  city: { type: String, required: true},
  hotelName: { type: String, required: true},
  starCategory: {type: String, required: true},
  roomType:{
     acSingle:{ type: String, default: 5},
    acDouble:{ type: String, default: 10},
    nonacSingle:{ type: String, default: 5},
    nonacDouble:{ type: String, default: 10},
    total:{type: String, default: 30}
     },
  images: [{imgUrl:{type:String, required: true}}],
  reviews: [ 
     {
      user: { type: mongoose.Schema.ObjectId, ref: "User",  required: true,  },
      name: { type: String, required: true, },
      rating: { type: Number,  required: true, },
      comment: { type: String,   required: true, },
    },
  ],
  createdAt: { type: Date,  default: Date.now, },
});

module.exports = mongoose.model("Hotel", hotelSchema);
