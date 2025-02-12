const adminModel = require("../models/adminModel")
const sellerModel = require("../models/sellerModel")
const sellerCustomerModel = require("../models/chat/sellerCustomerModel")
const cloudinary = require('cloudinary').v2
const { extractPublicId } = require ('cloudinary-build-url')
const { responseReturn } = require("../utils/response")
const bcrypt = require('bcrypt')
const { createToken } = require("../utils/tokenCreate")
const formidable = require("formidable")
const jwt = require("jsonwebtoken");




class authControllers {
    admin_login = async(req,res) => {
        const {email,password} = req.body
        try{
            const admin = await adminModel.findOne({email}).select('+password')
            if(admin){
                const match = await bcrypt.compare(password, admin.password)
                if(match){
                    const token = await createToken({
                        id: admin.id,
                        role: admin.role
                    })
                    res.cookie('accessToken',token,{
                        expires : new Date(Date.now()+7*24*60*60*1000)
                    })
                    responseReturn(res,200,{token,message:"Login Successful"})

                }
                else{
                    responseReturn(res,404,{error:"Password Wrong"})
                }
            }
            else{
                responseReturn(res,404,{error: "Email not found"})
            }
        }
        catch (error){
            responseReturn(res,500,{error: error.message})
        }
    }

    seller_register = async(req,res) => {
        const {name,email,password} = req.body
        try{
            const getUser = await sellerModel.findOne({email})
            if(getUser){
                responseReturn(res,404,{error:"Email Already Exists"})
            }
            else{
                const seller = await sellerModel.create({
                    name,
                    email,
                    password: await bcrypt.hash(password, 10),
                    method: "manually",
                    shopInfo: {}
                })
                await sellerCustomerModel.create({
                    myId: seller.id
                })
                const token = await createToken({
                    id: seller.id,
                    role: seller.role
                })
                res.cookie('accessToken',token,{
                    expires : new Date(Date.now()+7*24*60*60*1000)
                })
                responseReturn(res,201,{token,message:"Register Successful"})
            }
        }
        catch(error){
            responseReturn(res,500,{error: error.message})
        }
        
    }

    seller_login = async(req,res) => {
        const {email,password} = req.body
        console.log(req.body)
        
        try{
            const seller = await sellerModel.findOne({email}).select('+password')
            
            
            if(seller){
                const match = await bcrypt.compare(password, seller.password)
                
                if(match){
                    const token = await createToken({
                        id: seller.id,
                        role: seller.role
                    })
                    res.cookie('accessToken',token,{
                        expires : new Date(Date.now()+7*24*60*60*1000)
                    })
                    responseReturn(res,200,{token,message:"Login Successful"})

                }
                else{
                    responseReturn(res,404,{error:"Password Wrong"})
                }
            }
            else{
                responseReturn(res,404,{error: "Email not found"})
            }
        }
        catch (error){
            responseReturn(res,500,{error: error.message})
        }
    }

    getUser = async(req,res) => {
        console.log(req.body)
        const {accessToken} = req.body
        const role = ''
        const id =''
        console.log(accessToken,'accessToken at server')
        if(accessToken){
        const {accessToken} = req.body
        const deCodeToken = await jwt.verify(accessToken,process.env.SECRET)
        console.log(deCodeToken)                    
        role = deCodeToken.role
        id = deCodeToken.id}
        console.log(role,'role')
        console.log(id,'id')
        try{
            if(role==='admin'){
                const user = await adminModel.findById(id)
                responseReturn(res,200,{userInfo : user})
            }
            else{
                const seller = await sellerModel.findById(id)
                responseReturn(res,200,{userInfo : seller})
            }

        }
        catch(error){
            responseReturn(res,500,{error: "internal server error"})

        }

    }


    profile_image_upload = async(req,res) => {
        const {id} = req
        const form = formidable({multiples:true})
        form.parse(req,async(err,_,files)=>{
            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true
            })
            const {image} = files
            try {
                const result = await cloudinary.uploader.upload(image.filepath,{folder: 'profile'});
                if(result){
                    await sellerModel.findByIdAndUpdate(id,{image:result.url})
                    const userInfo = await sellerModel.findById(id)
                    responseReturn(res,200,{userInfo,message : "Profile Image Added"})
                }
                else{
                    responseReturn(res,404,{message : "Profile Image Upload Failed"})
                }              
                
            } catch (error) {
                responseReturn(res,500,{error : error.message})
            }
        })     
    }

    
    shopInfo_upload = async(req,res) => {
        const {id} = req
        const shopInfo = req.body
        try {
            await sellerModel.findByIdAndUpdate(id,{shopInfo})
            const result = await sellerModel.findById(id)
            responseReturn(res,200,{result,message : "ShopInfo Added"})
        } catch (error) {
            responseReturn(res,500,{error : error.message})
        }
                   
    }

    logout = async(req,res) => {
        try{
             res.cookie('accessToken',null,{
              expires : new Date(Date.now()),
              httpOnly: true
            })
            responseReturn(res,200,{message: 'logout successful'})
        }
        catch (error){
            responseReturn(res,500,{error: error.message})
        }
    }


    



}

module.exports = new authControllers()