const jwt = require('jsonwebtoken')
const {User,Role} = require('../models')

module.exports = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')){
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }
    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY )
        const user = await User.findByPk(payload.id,{include: Role})

        if (!user)return res.status(401).json({message : 'user not found'})
            req.user = {
                id: user.id,
                email: user.email,
                roles: user.Roles.map(r=>r.name)
            }
            next()
    }catch(error){
        return res.status(401).json({
            message : 'invalid token',
            error : error
        })
    }
}