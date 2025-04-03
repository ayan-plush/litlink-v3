const {Schema, model} = require('mongoose')

const sellerAdminSchema = new Schema({
    myId : {
        type: String,
        required: true,
    },
    myFriend : {
        type: Array,
        default: [{
            "friendId": "6783289d783b7c77461edb7e",
            "name": "Ayan",
            "image": "https://res.cloudinary.com/decks92gf/image/upload/v1738327724/4c70d8ecf0ae67eed061e162796ac3a4_x4nx7m.jpg"
          }],
    }
},{timestamps: true})

module.exports = model('seller_admin', sellerAdminSchema)