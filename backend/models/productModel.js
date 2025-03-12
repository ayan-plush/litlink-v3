const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    sellerId : {
        type: Schema.ObjectId,
        required: true,
    },
    name : {
        type: String,
        required: true,
    },
    slug : {
        type: String,
        required: true,
    },
    category : {
        type: String,
        required: true,
    },
    author : {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    stock : {
        type: Number,
        required: true,
    },
    discount : {
        type: Number,
        default: 0,
    },
    description : {
        type: String,
        required: true,
    },
    shopName : {
        type: String,
        required: true,
    },
    images : {
        type: Array,
        required: true,
    },
    tag : {
        type: Array,
        default: [],
    },
    rating : {
        type: Number,
        default : 5
    },
    status : {
        type: Object,
        default: {
            name : "Available",
            id : ''
        },
    }
},{timestamps: true})

productSchema.index({
    name: 'text',
    category: 'text',
    author: 'text',
    description: 'text'
},{
    weights: {
        name:5,
        category:4,
        author:3,
        description:2
    }
})

module.exports = model('products', productSchema)