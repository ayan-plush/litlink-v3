const formidable = require("formidable")
const { responseReturn } = require("../../utils/response")
const { default: slugify } = require("slugify")
const categoryModel = require("../../models/categoryModel")
const cloudinary = require('cloudinary').v2
const jwt = require("jsonwebtoken");


class categoryControllers{
    add_category = async (req,res) => {
        const form = formidable()
        form.parse(req,async(err,fields,files)=>{
            if(err){
                responseReturn(res,404, {error:'something went wrong'})
            }
            else {
                let {name,accessToken} = fields
                if(!accessToken){
                    return res.status(409).json({error:'Please login first'})
                }
                else{
                    try{
                        const deCodeToken = await jwt.verify(accessToken,process.env.SECRET)
                        req.role = deCodeToken.role
                        req.id = deCodeToken.id
                        if(deCodeToken.role==='admin'){
                        }
                        else{
                            return res.status(409).json({error:'Action unauthorized'})
                        }
                        
                    }
                    catch(error){
                        return res.status(409).json({error:'Please login first'})
                    }
                    }
                let {image} = files
                const slug = slugify(name).toLowerCase()
                const getCategory = await categoryModel.findOne({slug})
                cloudinary.config({
                    cloud_name: process.env.cloud_name,
                    api_key: process.env.api_key,
                    api_secret: process.env.api_secret,
                    secure: true
                })

                if(!getCategory){
                    try {

                        const result = await cloudinary.uploader.upload(image.filepath,{folder: 'categories'})
                        if(result){
    
                            const category = await categoryModel.create({
                                name,
                                slug,
                                image: result.url
                            })
                            responseReturn(res,201, {category,message:'Category Added Successfully'})
    
                        }
                        else{
                            responseReturn(res,404, {error:'image upload failed'})
    
                        }
                        
                    } catch (error) {
                        responseReturn(res,500, {error:'internal server error'})
                        
                    }
                }
                else{
                    responseReturn(res,404, {error:'category already exists'})
                }
                
            }
        })
       

    }
    
    get_category = async (req,res) => {
        const {page,searchValue,perPage} = req.query
        
        
        try {

            let skipPage = ''
            if (perPage&&page) {
                skipPage = parseInt(perPage)*(parseInt(page)-1)
            }

            if (searchValue&&page&&perPage) {
                const categories = await categoryModel.find({
                    $text: {$search: searchValue}
                }).skip(skipPage).limit(perPage).sort({createdAt: -1})
                const totalCategory = await categoryModel.find({
                    $text: {$search: searchValue}
                }).countDocuments()
                responseReturn(res,200,{categories,totalCategory})
    
            }
            
            else if(searchValue===''&&page&&perPage){
                const categories = await categoryModel.find({}).skip(skipPage).limit(perPage).sort({name: 1})
                const totalCategory = await categoryModel.find({}).countDocuments()
                responseReturn(res,200,{categories,totalCategory})
            }
            
            else {
                const categories = await categoryModel.find({}).sort({name: 1})
                const totalCategory = await categoryModel.find({}).countDocuments()
                responseReturn(res,200,{categories,totalCategory})
            }
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }






}

module.exports = new categoryControllers()