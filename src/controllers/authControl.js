const { use } = require('react')
const { User, Role, UserRole } = require('../models')
const { sendVerificationEmail } = require('../services/mailService')
const { verifyEmailToken, generateEmailToken } = require('../utils/tokenUtils')
exports.register = async (req, res) =>{
    try {
        const { email,username,password } =  req.body
        const exist = await User.findOne({where:{email}})
        if(exist) return res.status(400).json({
            message: 'Email and Username has been registered'
        })
        const user = await User.create({
            email,username,password
        })
        const role = await  Role.findOne({where:{name: 'user'}})
        if(role){
            await UserRole.create({
                userId : user.id,
                roleId: role.id
            })
        }
        const emailToken = generateEmailToken(user);
        await sendVerificationEmail(user.email, emailToken)
        res.status(201).json({
            message : 'Account register is succesfully, please verify your email'
        })
        

    } catch (error) {
        res.status(500).json({
            message: 'register process is error',
            error: error.message,
            
        });
        console.log(error)
    }
}

exports.verifyEmail = async (req,res) =>{
    try {
        const {token} = req.query
        const payload = verifyEmailToken(token)
        const user = await User.findByPk(payload.id)
        if(!user) return res.status(400).json({message: 'invalid token'})
        
        user.isVerified = true
        await user.save()
        res.json({
            message: 'Email verified'
        })

    }catch(error){
        res.status(400).json({
            message : 'verification failed',
            error: error.message
        })
    }
}
exports.login = async (req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({where:email})
        if(!user || (!await user.comparePassword(password))){
            return res.status(400).json({
                message: 'invalid crendential'
            })
        }
        if(!user.isVerified){
            return res.status(403).json({
                message: 'Email not verified yet'
            })
        }

        const token = generateAccesToken(user)
        res.json(token)
    } catch (error) {
        
    }
}