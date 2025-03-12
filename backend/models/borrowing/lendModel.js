const {Schema, model} = require('mongoose')

const lendSchema = new Schema({
    lenderId : {
        type: String,
        required: true,
    },
    borrowerId : {
        type: String,
        required: true,
    },
    bookId : {
        type: String,
        required: true,
    },
    book : {
        type: Object,
        required: true,
    }
},{timestamps: true})

module.exports = model('lend', lendSchema)