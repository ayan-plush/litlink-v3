const {Schema, model} = require('mongoose')

const sellerCustomerMessageSchema = new Schema({
    senderName : {
        type: String,
        required: true,
    },
    senderId : {
        type: String,
        required: true,
    },
    recieverId : {
        type: String,
        required: true,
    },
    message : {
        type: String,
        required: true,
    },
    status : {
        type: String,
        default: 'unseen',
    }
},{timestamps: true})

module.exports = model('seller_customers_message', sellerCustomerMessageSchema)