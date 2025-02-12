const productModel = require("../../models/productModel")
const wishlistModel = require("../../models/wishlistModel")
const { responseReturn } = require("../../utils/response")


class wishlistControllers{
    add_to_wishlist = async (req,res) => {
        const {productId,userId} = req.body
        try {   
                const product = await wishlistModel.findOne({
                    $and:[{
                        productId : {
                            $eq: productId
                        }
                    },
                    {
                        userId: {
                            $eq: userId
                        }
                    }
                ]
                })
                const productCount = await wishlistModel.find({                
                        userId: {
                            $eq: userId
                        }
                }).countDocuments()
                if(product){
                    responseReturn(res,404,{error:'already in wishlist',productCount})
                }
                else{
                    const product_add = await wishlistModel.create({
                        productId,
                        userId,
                    })
                    responseReturn(res,201,{message:'product added to wishlist',product_add,productCount})
                }
                
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }

    delete_from_wishlist = async (req,res) => {
        const {productId,userId} = req.body
        try {   
                const product = await wishlistModel.findOne({
                    $and:[{
                        productId : {
                            $eq: productId
                        }
                    },
                    {
                        userId: {
                            $eq: userId
                        }
                    }
                ]
                })
                const deleted = await wishlistModel.findByIdAndDelete(product._id)
                const productCount = await wishlistModel.find({                
                        userId: {
                            $eq: userId
                        }
                }).countDocuments()

                responseReturn(res,200,{message:'product removed',productCount})
                
                
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }





    get_wishlist = async (req,res) => {
        const {userId} = req.params


        try {
                const products = await wishlistModel.find({                
                        userId: {
                            $eq: userId
                        }
                })
                
                let i = 0
                const productWis = []
                while(i<products.length){
                    const thisproduct = await productModel.findById(products[i].productId)
                    productWis.push(thisproduct)
                    i++
                }
                const productCount = await wishlistModel.find({                
                    userId: {
                        $eq: userId
                    }
            }).countDocuments()
                responseReturn(res,200,{productWis,productCount})


                // if(product){
                //     responseReturn(res,404,{error:'already in wishlist',productCount})
                // }
                // else{
                //     const product_add = await wishlistModel.create({
                //         productId,
                //         userId,
                //     })
                //     responseReturn(res,201,{message:'product added to wishlist',product_add,productCount})
                // }
                
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }




}

module.exports = new wishlistControllers()