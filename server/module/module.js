const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    email: {type:String},
    password: {type:String},
    name: {type:String},
    subname: {type:String},
    phone: {type:Number},
    card:{type:Number},
    cardOwned:{type:String},
    role:{type:String}
}, { timestamps: {createdAt: 'createDate', updatedAt: 'updateDate'} })

const MemberSchema = new Schema({
    email: {type:String},
    password: {type:String},
    name: {type:String},
    subname: {type:String},
    phone: {type:Number},
    card:{type:Number},
    cardOwned:{type:String},
    role:{type:String}
}, { timestamps: {createdAt: 'createDate', updatedAt: 'updateDate'} })

const CategorySchema =  new Schema({
    nameUz:{type:String},
    nameRu:{type:String}
}, { timestamps: { createdAt: 'createDate', updatedAt: 'updatedDate' } })

const OfferSchema = new Schema({
    name:{type:String},
    description:{type:String},
    price:{type:Number},
    categoryId:{type:String},
    img:{type:String}
}, { timestamps: {createdAt: 'createDate', updatedAt: 'updateDate'} })

const TrafficSchema = new Schema({
    name:{type:String},
    description:{type:String},
    fullUrl:{type:String},
    shortUrl:{type:String},
    urlCode:{type:String}
}, { timestamps: {createdAt: 'createDate', updatedAt: 'updateDate'}})

const ClicksSchema = new Schema({
    name:{type:String},
    description:{type:String},
    fullUrl:{type:String},
    shortUrl:{type:String}
}, { timestamps: {createdAt: 'createDate', updatedAt: 'updateDate'}})

const LanguageSchema = new Schema({

}, { timestamps: { createdAt: 'createDate', updatedAt: 'updatedDate' } })

const AppSchema = new Schema({
    percent:{type:String}
}, { timestamps: { createdAt: 'createDate', updatedAt: 'updatedDate' } })

module.exports.user       = model('User', UserSchema)
module.exports.member     = model('Member', MemberSchema)
module.exports.category   = model('Category', CategorySchema)
module.exports.offer      = model('Offer', OfferSchema)
module.exports.traffic    = model('Traffic', TrafficSchema)
module.exports.click      = model('Click', ClicksSchema)
module.exports.language   = model('Language',LanguageSchema)
module.exports.appsetting = model('AppSetting', AppSchema)