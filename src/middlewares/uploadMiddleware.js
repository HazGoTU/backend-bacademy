// const { cloudinary } = require('cloudinary').v2 
const multer = require('multer')
// const { CloudinaryStorage } = require('multer-storage-cloudinary')
const path = require('path')

// cloudinary.config({
//     cloud_name: 'dcolhj9cy',
//     api_key: '625516527993685',
//     api_secret: 'OunPzORF03a6U7uAjacjDbHQPLc'
// });

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'course_assets',
//         allowed_formats: ['jpg', 'jpeg', 'png', 'webp']
//     },
//     filename : (req,file,cb)=>{
//         const unique = Date.now()+ Math.round(Math.random()*1e9)
//         cb(null,unique + path.extname(file.originalname))
//     }
// })

// const upload = multer({storage: storage})
// module.exports = { upload, cloudinary }


const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null, 'uploads/')
    },
    filename : (req,file,cb)=>{
        const unique = Date.now() + Math.round(Math.random()*1e9)
        cb(null, unique+ path.extname(file.originalname))
    }
})
const fileFilter = (req,file,cb)=>{
    if(!file.mimetype.startsWith('image/')){
        return cb(new Error('File format have to be Image'),false)
    }
    cb(null,true)

}

const upload = multer({storage,fileFilter})

module.exports = upload