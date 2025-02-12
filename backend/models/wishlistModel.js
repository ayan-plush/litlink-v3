const {Schema, model} = require('mongoose')

const wishlistSchema = new Schema({
    userId : {
        type: Schema.ObjectId,
        required: true,
    },
    productId : {
        type: Schema.ObjectId,
        required: true,
    }
},{timestamps: true})


module.exports = model('wishlist', wishlistSchema)