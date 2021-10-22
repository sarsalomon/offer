const validUrl = require('valid-url');
const shortid  = require('shortid');
const Traffic  = require("../module/module");
const ApiError = require('../error/ApiError');

const BASE_URL = process.env.BASE_URL

class trafficController{
    async trafficadd(req,res,next){
        const {name, description, fullUrl, shortUrl} = req.body
        if(name === ''){
            return next(ApiError.badRequest('name nomi yozilmagan'))
        }else if(description === ''){
            return next(ApiError.badRequest('description nomi yozilmagan'))
        }else if(fullUrl === ''){
            return next(ApiError.badRequest('fullUrl nberilmagan'))
        }else if(shortUrl === ''){
            return next(ApiError.badRequest('shortUrl nberilmagan'))
        }else{
            if (!validUrl.isUri(fullUrl)) {
                return next(ApiError.badRequest('Invalid base url'));
              }            
        const urlCode = shortid.generate();

        try {
            let url = await Traffic.traffic.findOne({ urlCode });
      
            if (url) {
              res.json(url);
            } else {
              const shortUrl = 'http://' + BASE_URL + '/' + 'api/traffic/' + urlCode;
              const traffic = await Traffic.traffic.create({name, description, fullUrl, shortUrl, urlCode});
              return res.json(traffic);
            }
          } catch (err) {
            console.error(err);
            res.status(500).json('Server error');
          }
        }
    }

    async trafficget(req,res,next){
        const {id} = req.params
        const trafficget = await Traffic.traffic.findById(id)
        return res.json(trafficget)
    }
    
    async trafficsget(req,res,next){
        const trafficsget = await Traffic.traffic.find().sort({ _id: -1 })
        return res.json(trafficsget)
    }

    async trafficupdate(req,res,next){
        const {id, name, description, fullUrl, shortUrl} = req.body
        const trafficupdate = await Traffic.traffic.findByIdAndUpdate(id, {name, description, fullUrl, shortUrl},{new:true})
        return res.json(trafficupdate) 
    }

    async trafficdelete(req,res,next){
        const {id} = req.body
        console.log(req.body)
        const trafficdelete = await Traffic.traffic.findByIdAndDelete(id)
        return res.json(trafficdelete)
    }

    async trafficredirect(req,res,next){
        try {
            const url = await Traffic.traffic.findOne({ urlCode: req.params.code });
            if (url) {
              return res.redirect(url.fullUrl);
            } else {
              return res.status(404).json('No url found');
            }
          } catch (err) {
            console.error(err);
            res.status(500).json('Server error');
          }
    }
}

module.exports = new trafficController()