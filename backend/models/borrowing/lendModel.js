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
    lenderName: {
        type: String,
        required: true
    },
    borrowerName: {
        type: String,
        required: true
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

lendSchema.index({"book.name": "text"})

module.exports = model('lend', lendSchema)