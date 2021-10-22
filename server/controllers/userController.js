const ApiError = require("../error/ApiError")
const bcrypt   = require('bcrypt')
const jwt      = require('jsonwebtoken')
const User     = require('../module/module')

const generateJwt = (id, email, role) =>{
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '365d'}
    )
}

class userController{
    async registration(req,res,next){
        const {email, password} = req.body
        let role = 'User'
        if(!email || !password){
            return next(ApiError.badRequest("Некооретный email or password"))
        }
        const condidate = await User.user.findOne({email})
        if(condidate){
            return next(ApiError.badRequest("Пользиватель с таким email уже существует"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.user.create({email, password: hashPassword, role})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req,res,next){
        const {email, password} = req.body
        const user = await User.user.findOne({email})
        if(!user){
            return next(ApiError.internal("Пользиватель не найдень"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal("Указан неверный пароль"))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req,res,next){
       const token = generateJwt(req.user.id, req.user.email, req.user.role)
       return res.json({token})
    }

    async update(req,res,next){
        
    }

    async delete(req,res,next){
        
    }
}

module.exports = new userController()