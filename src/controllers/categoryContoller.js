const { Category } = require('../models')

exports.createCategory = async (req,res)=>{
    const data = await Category.create(req.body)
    res.status(201).json({message:"Category has been created"})
}
exports.getAll = async (req,res)=>{
    const categories = await Category.findAll()
    res.json(categories)
}