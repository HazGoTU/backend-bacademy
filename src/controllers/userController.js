const {User, Role, UserRole} = require('../models')

exports.getUser = async (req,res)=>{
    const user = await User.findByPk(req.user.id,{include: Role})
    res.json(user)
}
exports.getAll = async (req,res)=>{
    const user = await User.findAll()
    res.json(user)
}
