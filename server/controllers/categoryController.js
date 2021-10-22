const ApiError = require("../error/ApiError")
const  Category  = require("../module/module")

class categoryController{
    async categoryadd(req,res,next){
        const {nameUz} = req.body
        if(!nameUz){
            return next(ApiError.badRequest('Empty uz or ru'))
        }
        const category = await Category.category.create({nameUz})
        return res.json(category)
    }
    
    async categoriesget(req,res,next){
        const categories = await Category.category.find().sort({ _id: -1 })
        return res.json(categories)
    }

    async categoryget(req,res,next){
        const {id} = req.params
        const getsubcategory = await Subcategory.subcategory.findById(id)
        return res.json(getsubcategory)
    }

    async categoryupdate(req,res,next){
        const {id, nameUz} = req.body
        const updatecategory = await Category.category.findByIdAndUpdate(id, {nameUz},{new:true})
        return res.json(updatecategory)
    }

    async categorydelete(req,res,next){
        const {id} = req.body
        const deletecategory = await Category.category.findByIdAndDelete(id)
        return res.json(deletecategory)
    }
}

module.exports = new categoryController()