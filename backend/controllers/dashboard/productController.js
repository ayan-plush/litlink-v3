const formidable = require("formidable")
const jwt = require("jsonwebtoken");
const { responseReturn } = require("../../utils/response")
const { default: slugify } = require("slugify")
const productModel = require("../../models/productModel")
const { extractPublicId } = require ('cloudinary-build-url')
const lendModel = require("../../models/borrowing/lendModel")
const tf = require('@tensorflow/tfjs');
const use = require('@tensorflow-models/universal-sentence-encoder');


const cloudinary = require('cloudinary').v2

class productControllers{
    add_product = async (req,res) => {
        const form = formidable({multiples:true})
        form.parse(req,async(err,field,files)=>{
            let {name,category,description,rating,price,tags,sellerId,shopName,author,accessToken} = field
            const deCodeToken = await jwt.verify(accessToken,process.env.SECRET)
            if(!accessToken||deCodeToken.id!==sellerId){
                responseReturn(res,409,{message: 'unauthorized'})
                return;
            }
            else{
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
                    rating: parseInt(rating),
                    shopName,
                    tag:tags,
                    description: description,
                    images: allImageUrl,
                    stock: 1
                })
                responseReturn(res,201,{message: 'Book Added Successfully'})
                
            } catch (error) {
                responseReturn(res,500,{error: error.message})
                
            }
            }
        })     
       

    }
    //END METHOD
    get_products = async (req,res) => {
        const {page,searchValue,perPage} = req.query        
        const {id} = req.body
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

    get_lend = async (req,res) => {
        const {page,searchValue,perPage} = req.query        
        const {id} = req.body
        try {
            let skipPage = ''
            if (perPage&&page) {
                skipPage = parseInt(perPage)*(parseInt(page)-1)
            }

            if (searchValue&&page&&perPage) {
                const lend = await lendModel.find({
                    $text: {$search: searchValue},
                    lenderId: id
                }).skip(skipPage).limit(perPage).sort({slug: 1})
                const totalLends = await lendModel.find({
                    $text: {$search: searchValue},
                    lenderId: id
                }).countDocuments()
                responseReturn(res,200,{lend,totalLends})
    
            }
            
            else if(searchValue===''&&page&&perPage){
                const lend = await lendModel.find({lenderId: id}).skip(skipPage).limit(perPage).sort({slug: 1})
                const totalLends = await lendModel.find({lenderId: id}).countDocuments()
                responseReturn(res,200,{lend,totalLends})
            }
            
            else {
                const lend = await lendModel.find({lenderId: id}).sort({slug: 1})
                const totalLends = await lendModel.find({lenderId: id}).countDocuments()
                responseReturn(res,200,{lend,totalLends})
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
        const {name,description,category,status,stock,tags,price,shopName,author,productId,lenderId,borrowerId,lenderName} = req.body

        
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
                category,
                status
            })
            const product = await productModel.findById(productId)

            if(borrowerId!==''){
                const checkStatus = await lendModel.findOne({$and:[
                    {
                        lenderId:{
                            $eq: lenderId
                        }
                    },
                    {
                        bookId:{
                            $eq: productId
                        }
                    }
                ]})
                if(!checkStatus&&status.id!==''){

                    await lendModel.create({
                        lenderId: lenderId,
                        borrowerId: status.id,
                        borrowerName:status.name,
                        lenderName: lenderName,
                        bookId: productId,
                        book: product
                    })

                }
                else if(status.id===''&&checkStatus){
                    await lendModel.deleteOne({
                        bookId: productId
                    })
                }
                else {
                    await lendModel.updateOne({
                        bookId: productId
                    },
                    {
                        lenderId: lenderId,
                        borrowerId: status.id,
                        borrowerName:status.name,
                        lenderName: lenderName,
                        bookId: productId,
                        book: product

                    })
                }
            }
            else{
                const lend = await lendModel.findOneAndDelete({
                        bookId: productId
                })
            }
            

            responseReturn(res,200,{product,message: "Book Updated Successfully"})
        } catch (error) {
            responseReturn(res,500,{error : error.message})
        }
    }


    update_product_image = async (req,res) => {

        const form = formidable({multiples:true})
        form.parse(req,async(err,field,files)=>{
            const {oldImage,productId,accessToken,sellerId} = field
            const deCodeToken = await jwt.verify(accessToken,process.env.SECRET)
            if(!sellerId||!accessToken||deCodeToken.id!=sellerId){
                responseReturn(res,404,{error: 'unauthorized'})
            }
            else{
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
            }
            
            
            
            
        })  
    }

    get_simillar_books = async(req,res) => {

        const {id} = req.body

        try {
        const model = await use.load();
        const books = await productModel.find({});

        if (!books.length) {
            responseReturn(res, 404, { error: "No books found" });
        }


        const texts = books.map(p => 
        `${p.name} ${p.category} ${p.author} ${p.description} ${p.tag.join(' ')}`
        );

        const embeddings = await model.embed(texts);

        const targetBook = productModel.findById(id);

        if(!targetBook){
            responseReturn(res,400,{error: "book not found"})
        }
        const targetIndex = books.findIndex(p => p._id.toString() === id);
        if (targetIndex === -1) {
            return responseReturn(res, 400, { error: "Book not found" });
        }

        const targetEmbedding = embeddings.slice([targetIndex, 0], [1, -1]);
        const similarities = embeddings.matMul(targetEmbedding.transpose()).arraySync();
        const scored = similarities.map((scoreArr, i) => ({
        score: scoreArr[0],
        book: books[i]
        }));
        const sorted = scored
        .filter((_, i) => i !== targetIndex) // exclude the input book itself
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
        responseReturn(res,200,{sorted})
    }
    catch(error){
        responseReturn(res,500,{error: error.message})
    }

    }






}

module.exports = new productControllers()