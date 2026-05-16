const { Course,Category,Chapter,Part } = require('../models')


exports.createCourse = async (req,res)=>{
    try {
        const{title,description,price,categoryId} = req.body
    const category = await Category.findByPk(categoryId)
    if(!category) return res.status(404).json({message:'Category Not Available'})
    
    const image_url = req.file ? `/uploads/${req.file.filename}` : null

    const data = await Course.create({
        title,description,price,categoryId,image_url
    })
    res.status(201).json(data)
    } catch (error) {
        res.status(404).json({message:error})
    }
    
}
exports.createChapter = async (req,res)=>{
    const {title} = req.body
    const courseId = req.params.id
    const data = await Chapter.create({
        title,courseId
    })
    res.status(201).json(data)
}
exports.createPart = async (req,res)=>{
    const {title,content} = req.body
    const chapterId = req.params.id
    const data = await Part.create({
        title,content,chapterId
    })
    res.status(201).json(data)
}

exports.getCourse = async (req,res)=>{
    try {
        const data = await Course.findByPk(req.params.id ,{include:Category,Chapter} )
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message : error})
        console.log(error)
    }
    
}
exports.getChapters = async (req,res)=>{
    try {
        const data = await Chapter.findAll({include:Course})
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message : error})
    }
}
exports.getCourses = async (req,res)=>{
    try {
        const data = await Course.findAll({
            include : Category
        })
        res.status(200).json(data)    
    } catch (error) {
        res.status(404).json({message:error})
    }
    
}
exports.getPart = async (req,res)=>{
    try {
        const data = await Chapter.findAll({
            include : Chapter
        })
        res.status(201).json(data)    
    } catch (error) {
        res.status(404).json({message:error})
    }    
}

exports.updateCourse = async (req,res)=>{
    try {
        const data = await Course.findByPk(req.params.id,{include:{Category}})
        if(!data) return res.status(404).json({message:error})
        const {title,description,price} = req.body
        const payload = {}
        if(title) payload.title
        if(description) payload.description = description
        if(req.file) payload.image_url = `/uploads/${req.file.filename}`
        await data.update(payload)
        res.status(201).json(data)
    } catch (error) {
        res.status(404).json({message:error})
    }
}
exports.updateChapter = async (req,res)=>{
    try {
        const data = await Chapter.findByPk(req.params.id)
        if(!data) return res.status(404).json({message:'not found'})
        const {title} = req.body
        const payload = {}
        if (title) payload.title = title
        await data.update(payload)    
        res.status(201).json(data)
    } catch (error) {
        res.status(404).json({message:error})
    }
}
exports.updatePart = async (req,res)=>{
    try {
        const data = await Part.findByPk(req.params.id,)
        if(!data) return res.status(404).json({message:'not found'})
        const {title,content} = req.body
        const payload = {}
        if(title) payload.title = title
        if(content) payload.content = content
        await data.update(payload)
        res.status(201).json(data)
    } catch (error) {
        res.status(404).json({message:error})
    }
}
exports.deleteCourse = async (req,res)=>{
    try {
        
        const data = await Course.findByPk(req.params.id)
        const chapter = await Chapter.findAll({where: data.courseId})
        const part = await Part.findAll({where: chapter.chapterId})

        await data.destroy()
        await chapter.destroy()
        await part.destroy()
        res.status(201).json({message:error})
    } catch (error) {
        res.status(404).json({message:error})
        console.log(error)
    }
}
