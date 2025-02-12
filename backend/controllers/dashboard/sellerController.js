const formidable = require("formidable")
const { responseReturn } = require("../../utils/response")
const { default: slugify } = require("slugify")
const sellerModel = require("../../models/sellerModel")
const cloudinary = require('cloudinary').v2

class sellerControllers{
    
    
    get_seller_request = async (req,res) => {
        const {page,searchValue,perPage} = req.query      
        try {

            let skipPage = ''
            if (perPage&&page) {
                skipPage = parseInt(perPage)*(parseInt(page)-1)
            }

            if (searchValue&&page&&perPage) {
                const pendingSellers = await sellerModel.find({
                    $text: {$search: searchValue},
                    status:'pending'
                }).skip(skipPage).limit(perPage).sort({createdAt: -1})
                const totalPendingSeller = await sellerModel.find({
                    $text: {$search: searchValue},
                    status:'pending'
                }).countDocuments()
                responseReturn(res,200,{pendingSellers,totalPendingSeller})
    
            }
            
            else if(searchValue===''&&page&&perPage){
                const pendingSellers = await sellerModel.find({status:'pending'}).skip(skipPage).limit(perPage).sort({name: 1})
                const totalPendingSeller = await sellerModel.find({status:'pending'}).countDocuments()
                responseReturn(res,200,{pendingSellers,totalPendingSeller})
            }
            
            else {
                const pendingSellers = await sellerModel.find({status:'pending'}).sort({name: 1})
                const totalPendingSeller = await sellerModel.find({status:'pending'}).countDocuments()
                responseReturn(res,200,{pendingSellers,totalPendingSeller})
            }
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }

    get_sellers = async (req,res) => {
        const {page,searchValue,perPage} = req.query        
        try {

            let skipPage = ''
            if (perPage&&page) {
                skipPage = parseInt(perPage)*(parseInt(page)-1)
            }

            if (searchValue&&page&&perPage) {
                const sellers = await sellerModel.find({
                    $text: {$search: searchValue}
                }).skip(skipPage).limit(perPage).sort({createdAt: -1})
                const totalSeller = await sellerModel.find({
                    $text: {$search: searchValue}
                }).countDocuments()
                responseReturn(res,200,{sellers,totalSeller})
    
            }
            
            else if(searchValue===''&&page&&perPage){
                const sellers = await sellerModel.find({}).skip(skipPage).limit(perPage).sort({name: 1})
                const totalSeller = await sellerModel.find({}).countDocuments()
                responseReturn(res,200,{sellers,totalSeller})
            }
            
            else {
                const sellers = await sellerModel.find({}).sort({name: 1})
                const totalSeller = await sellerModel.find({}).countDocuments()
                responseReturn(res,200,{sellers,totalSeller})
            }
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }

    get_seller = async(req,res) => {
        const {sellerId} = req.params
        try {
                    const seller = await sellerModel.findById(sellerId)
                    responseReturn(res,200,{seller})            
                    
                } catch (error) {
                    responseReturn(res,404,{error:error.message})
                }
    }

    update_seller_status = async(req,res) => {
        const {sellerId, status} = req.body
        try {
                    const seller = await sellerModel.findByIdAndUpdate(sellerId,{status})
                    responseReturn(res,200,{message: `Status Updated as ${status}`})            
                    
        } catch (error) {
                    responseReturn(res,404,{error:error.message})
        }
    }




}

module.exports = new sellerControllers()