const { responseReturn } = require("../../utils/response")
const categoryModel = require("../../models/categoryModel")
const productModel = require("../../models/productModel")
const queryProducts = require("../../utils/queryProducts")
const sellerModel = require("../../models/sellerModel")


class homeControllers{

    get_category_home = async (req,res) => {
                
        try {            
                const categories = await categoryModel.find({}).sort({name: 1})                
                responseReturn(res,200,{categories})
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }

    get_products_home = async (req,res) => {

        const formateProduct = (products) => {
            const productArray = []
            let i = 0 
            while (i < products.length) {
                let temp = []
                let j = i
                while (j<i+3){
                    if(products[j]){
                        temp.push(products[j])
                    }
                    j++
                }
                productArray.push([...temp])
                i = j
            }
            return productArray
        }
        
        try {        
                const products = await productModel.find({}).limit(20).sort({name: -1})    
                const latest_products = await productModel.find({}).limit(6).sort({createdAt: -1})
                // const products1 = await productModel.find({}).limit(6).sort({createdAt: -1})  
                // const latest_product = this.formateProduct(Products1)            
                responseReturn(res,200,{latest_products,products})
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }

    

    price_range_product = async (req,res) => {

           
        try {     
                const priceRange = {
                    low:0,
                    high:0
                }

                const products = await productModel.find({}).sort({price: -1})    
                const latest_products = await productModel.find({}).limit(6).sort({createdAt: -1})
                const getForPrice = await productModel.find({}).sort({price: 1})
                if(getForPrice.length>0){
                    priceRange.high = getForPrice[getForPrice.length-1].price
                    priceRange.low = getForPrice[0].price
                }
                responseReturn(res,200,{products,latest_products,priceRange})
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }
    query_products = async (req,res) => {
        
        try { 
                const products = await productModel.find({}).sort({createdAt: -1})
                const totalProducts = new queryProducts(products,req.query).categoryQuery().ratingQuery().priceQuery().searchQuery().sortByPrice().countProducts()
                const result = new queryProducts(products,req.query).categoryQuery().ratingQuery().priceQuery().searchQuery().sortByPrice().skip().limit().getProducts()
                

                responseReturn(res,200,{result,totalProducts})
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }

    get_product_details = async (req,res) => {
        const {productId} = req.params  
        try {
            const product = await productModel.findById(productId)
            responseReturn(res,200,{product})            
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }

    get_friend_details = async (req,res) => {
        const {sellerId} = req.params 
        try {
            const seller = await sellerModel.findById(sellerId)
            const image = seller.image
            const name = seller.name
            const books = await productModel.find({sellerId: sellerId}).sort({name: 1})
            const info = {
                image,
                name,
                books
            }
            responseReturn(res,200,{info})            
            
        } catch (error) {
            responseReturn(res,404,{error:error.message})
        }
    }

}

module.exports = new homeControllers()