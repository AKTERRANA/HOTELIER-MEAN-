const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const Hotel = require("../model/hotelsModel")

module.exports = {
    getHotels: async (req, res) => {
        console.log("CALLWEED")
        try {
            console.log("CALLED")
            const hotels = await Hotel.find();
            res.status(200).json({ success: "True", data: hotels })
        } catch (error) {
            res.status(400).json({ success: "Fail", message: "Server Error in getting Hotels" })
        }
    },
    addHotel: async (req, res) => {
        const images = [];

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            const photoArr = Object.keys(files);
            photoArr.forEach((photo) => {
                fileUpload(files[photo]);
            })

            function fileUpload(photo) {
                console.log(photo, "photo")
                let oldPath = photo.filepath;
                // let newPath = path.join(__dirname,"../", 'upload','hotelImages') + '/' + photo.originalFilename;
                let newPath = path.join(__dirname, "../../angular/src/assets", 'upload', 'hotelImages') + '/' + photo.originalFilename; // DEVELOPMENT 
                let rawData = fs.readFileSync(oldPath)
                images.push({ imgUrl: `hotelImages/${photo.originalFilename}` })
                fs.writeFile(newPath, rawData, function (err) {
                    if (err) {
                        images.pop();
                        console.log(err);
                    }
                    console.log(photo.originalFilename, "original file name")

                    console.log(images, "images")
                })
            }


            console.log(images, "IMAGES")
            const newHotel = new Hotel({
                user: fields.userId,
                country: fields.country,
                city: fields.city,
                hotelName: fields.hotelName,
                starCategory: fields.starCategory,
                roomType:{
                    acSingle: req.body.acSingle,
                    acDouble: req.body.acDouble,
                    nonacSingle: req.body.nonacSingle,
                    nonacDouble: req.body.nonacDouble,
                    total: +req.body.acSingle + +req.body.acDouble + +req.body.nonacDouble + +req.body.nonacDouble
                   },
                images: images,
                reviews: []

            })

            newHotel.save().then((savedData) => {
                res.status(200).json({ success: true, data: savedData })
            }).catch(e => {
                console.log(e, "error")
                res.status(401).json({ success: false, message: "Error in saving Hotel details" })
            })

        })
    }
}