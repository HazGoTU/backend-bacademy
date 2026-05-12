module.exports = (...allowedRoles)=>{
    return(req,res,next)=>{
        const userRoles = req.user?.roles || [];
        const hasRoles = userRoles.some(r=>allowedRoles.includes(r))
        console.log(userRoles)//
        if(!hasRoles){
            return res.status(403).json({
                message : 'Forbiden indufficient role'
            })
        }
        next()
    }
}