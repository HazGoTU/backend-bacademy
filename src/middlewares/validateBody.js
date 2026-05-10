module.exports = (requiredFields = []) => {
    return (req,res,next)=>{
        const missing = requiredFields.filter(f=>!req.body[f]);
        if(missing.length){
            return res.status(400).json({message : 'missing field', missing})
        }
        next();
    }
}
