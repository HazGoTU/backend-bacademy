const { Course,Category } = require('../models')


exports.createCourse = async (req,res)=>{
    const{title,description,price,categoryId} = req.body
    const category = await Category.findByPk(categoryId)
    if(!category) return res.status(404).json({message:'Category Not Available'})
    
    const image_url = req.file ? `/uploads/${req.file.filename}` : null

    const data = await Course.create({
        title,description,price,categoryId,image_url
    })
    res.status(201).json(data)
}
exports.getCourse = async (req,res)=>{

}
exports.getCourses = async (req,res)=>{
    const data = await Course.findAll({
        include : Category
    })
    res.status(200).json(data)
}
exports.updateCourse = async (req,res)=>{

}
exports.deleteCourse = async (req,res)=>{

}
