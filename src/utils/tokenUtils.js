const jwt = require('jsonwebtoken')
exports.generateEmailToken = (user)=>{
    return jwt.sign({
        id: user.id,
        email: user.email
        },
        process.env.EMAIL_TOKEN_SECRET,
        {expiresIn : '1d'}
    )
}
exports.verifyEmailToken = (token) => {
    return jwt.verify(token, process.env.EMAIL_TOKEN_SECRET)   
}
exports.generateAccesToken