const formidable = require("formidable")
const { responseReturn } = require("../../utils/response")
const { default: slugify } = require("slugify")
const productModel = require("../../models/productModel")
const { extractPublicId } = require ('cloudinary-build-url')


const cloudinary = require('cloudinary').v2

class productControllers{
    add_product = async (req,res) => {
        const form = formidable({multiples:true})
        form.parse(req,async(err,field,files)=>{
            let {name,category,description,stock,price,tags,sellerId,shopName,author} = field
            const {images} = files
            const slug = slugify(name).toLowerCase()
            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true
            })
            try {
                let allImageUrl = []
                if(images.length>1){
                    for (let i = 0; i < images.length; i++) {
                        const result = await cloudinary.uploader.upload(images[i].filepath,{folder: 'products'});
                        allImageUrl = [...allImageUrl, result.url]                    
                    }
                }
                else{
                    const result = await cloudinary.uploader.upload(images.filepath,{folder: 'products'});
                    allImageUrl = [...allImageUrl, result.url]
                }
                
                await productModel.create({
                    sellerId: sellerId,
                    name,
                    slug,                    
                    category: category,
                    author: author,
                    price: parseInt(price),
                    stock: parseInt(stock),
                    shopName,
                    tag:tags,
                    description: description,
                    images: allImageUrl
                })
                responseReturn(res,201,{message: 'Book Added Successfully'})
                
            } catch (error) {
                responseReturn(res,500,{error: error.message})
                
            }
        })     
       

    }
    //END METHOD
    get_products = async (req,res) => {
        const {page,searchValue,perPage} = req.query        
        const {id} = req
        try {
            let skipPage = ''
            if (perPage&&page) {
                skipPage = parseInt(perPage)*(parseInt(page)-1)
            }

            if (searchValue&&page&&perPage) {
                const products = await productModel.find({
                    $text: {$search: searchValue},
                    sellerId: id
                }).skip(skipPage).limit(perPage).sort({slug: 1})
                const totalProduct = await productModel.find({
                    $text: {$search: searchValue},
                    sellerId: id
                }).countDocuments()
                responseReturn(res,200,{products,totalProduct})
    
            }
            
            else if(searchValue===''&&page&&perPage){
                const products = await productModel.find({sellerId: id}).skip(skipPage).limit(perPage).sort({slug: 1})
                const totalProduct = await productModel.find({sellerId: id}).countDocuments()
                responseReturn(res,200,{products,totalProduct})
            }
            
            else {
                const products = await productModel.find({sellerId: id}).sort({slug: 1})
                const totalProduct = await productModel.find({sellerId: id}).countDocuments()
                responseReturn(res,200,{products,totalProduct})
            }
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }


    
    get_product = async (req,res) => {
        const {productId} = req.params        
        try {
            const product = await productModel.findById(productId)
            responseReturn(res,200,{product})            
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }

    update_product = async (req,res) => {
        const {name,description,category,stock,tags,price,shopName,author,productId} = req.body
        const slug = slugify(name).toLowerCase()

        try {
            await productModel.findByIdAndUpdate(productId,{
                name,
                description,
                stock,
                tag : tags,
                price,
                author,
                shopName,
                slug,
                category
            })
            const product = await productModel.findById(productId)
            responseReturn(res,200,{product,message: "Book Updated Successfully"})
        } catch (error) {
            responseReturn(res,500,{error : error.message})
        }
    }


    update_product_image = async (req,res) => {

        const form = formidable({multiples:true})
        form.parse(req,async(err,field,files)=>{
            const {oldImage,productId} = field
            const {newImage} = files
            if (err) {
                responseReturn(res,400,{error: error.message})
            }
            else {
                try {

                    cloudinary.config({
                        cloud_name: process.env.cloud_name,
                        api_key: process.env.api_key,
                        api_secret: process.env.api_secret,
                        secure: true
                    })

                    const result = await cloudinary.uploader.upload(newImage.filepath,{folder:'products'})

                    if (result) {
                        let {images} = await productModel.findById(productId)
                        const index = images.findIndex(img => img == oldImage)
                        images[index] = result.url
                        await productModel.findByIdAndUpdate(productId,{images})
                        const product = await productModel.findById(productId)
                        const publicId =  extractPublicId(oldImage)                         
                        await cloudinary.uploader.destroy(publicId)
                        responseReturn(res,200,{product,message: 'Image Updated Successfully'})
                    
                    } else {
                        responseReturn(res,404,{error: "Image Upload Failed"})
                    }
                
                    
                } catch (error) {
                    responseReturn(res,500,{error: error.message})
                    
                }
            }
            
            
        })  
    }






}

module.exports = new productControllers()