const adminModel = require("../../models/adminModel")
const sellerAdminMessageModel = require("../../models/chat/sellerAdminMessageModel")
const sellerAdminModel = require("../../models/chat/sellerAdminModel")
const sellerCustomerMessageModel = require("../../models/chat/sellerCustomerMessageModel")
const sellerCustomerModel = require("../../models/chat/sellerCustomerModel")
const productModel = require("../../models/productModel")
const sellerModel = require("../../models/sellerModel")
const { responseReturn } = require("../../utils/response")

class chatController{
    add_user_friend = async (req,res) => {
        const {userId,sellerId,userInfo} = req.body
        
        try {
            if(sellerId!==''){
                const seller = await sellerModel.findById(sellerId)
                const user = await sellerModel.findById(userId)
                    const checkSeller = await sellerCustomerModel.findOne({$and:[
                        {
                            myId:{
                                $eq: userId
                            }
                        },
                        {
                            myFriend: {
                                $elemMatch : {
                                    friendId : sellerId
                                }
                            }
                        }
                    ]}
                    )
                    if(!checkSeller){
                        await sellerCustomerModel.updateOne({
                            myId: userId
                        },
                        {
                            $push:  {
                                myFriend:{
                                    friendId : sellerId,
                                    name: seller.name,
                                    image: seller.image
                                }
                            }
                        })
                    }
                    const checkSeller2 = await sellerCustomerModel.findOne({$and:[
                        {
                            myId:{
                                $eq: sellerId
                            }
                        },
                        {
                            myFriend: {
                                $elemMatch : {
                                    friendId : userId
                                }
                            }
                        }
                    ]}
                    )
                    if(!checkSeller2){
                        await sellerCustomerModel.updateOne({
                            myId: sellerId
                        },
                        {
                            $push:  {
                                myFriend:{
                                    friendId : userId,
                                    name: user.name,
                                    image: user.image
                                }
                            }
                        })
                    }
                    const messages = await sellerCustomerMessageModel.find({
                        $or: [
                            {
                                $and: [{
                                    recieverId: {$eq: sellerId}
                                },{
                                    senderId: {$eq: userId}
                                }]
                            },{
                                $and: [{
                                    recieverId: {$eq: userId}
                                },{
                                    senderId: {$eq: sellerId}
                                }]
                            }
                        ]
                    })
                    const myFriends = await sellerCustomerModel.findOne({myId:userId})
                    const currentFriend = myFriends.myFriend.find(s=>s.friendId===sellerId)
                    responseReturn(res,200,{
                        MyFriends: myFriends.myFriend,
                        currentFriend,
                        messages
                    })
            }
            else {
                const myFriends = await sellerCustomerModel.findOne({myId:userId})
                responseReturn(res,200,{
                    MyFriends: myFriends.myFriend
                })
            }
            
        }
        catch(error){
            console.log(error)
        }
    }

    add_user_admin = async (req,res) => {
        const {userId,adminId} = req.body
        
        try {
            if(adminId){
                const user = await sellerModel.findById(userId)
                const admin = await adminModel.findById(adminId)
                const checkUser = await sellerAdminModel.findOne({myId: {$eq: userId}})
                if(!checkUser){
                    await sellerAdminModel.create({myId: userId})
                }
                const checkAdmin = await sellerAdminModel.findOne({myId: {$eq: adminId}})
                if(!checkAdmin){
                    await sellerAdminModel.create({myId: adminId})
                }

                    const checkSeller = await sellerAdminModel.findOne({$and:[
                        {
                            myId:{
                                $eq: userId
                            }
                        },
                        {
                            myFriend: {
                                $elemMatch : {
                                    friendId : adminId
                                }
                            }
                        }
                    ]}
                    )
                    if(!checkSeller){
                        await sellerAdminModel.updateOne({
                            myId: userId
                        },
                        {
                            $push:  {
                                myFriend:{
                                    friendId : adminId,
                                    name: admin.name,
                                    image: admin.image
                                }
                            }
                        })
                    }
                    const checkSeller2 = await sellerAdminModel.findOne({$and:[
                        {
                            myId:{
                                $eq: adminId
                            }
                        },
                        {
                            myFriend: {
                                $elemMatch : {
                                    friendId : userId
                                }
                            }
                        }
                    ]}
                    )
                    if(!checkSeller2){
                        await sellerAdminModel.updateOne({
                            myId: adminId
                        },
                        {
                            $push:  {
                                myFriend:{
                                    friendId : userId,
                                    name: user.name,
                                    image: user.image
                                }
                            }
                        })
                    }
                    const messages = await sellerAdminMessageModel.find({
                        $or: [
                            {
                                $and: [{
                                    recieverId: {$eq: adminId}
                                },{
                                    senderId: {$eq: userId}
                                }]
                            },{
                                $and: [{
                                    recieverId: {$eq: userId}
                                },{
                                    senderId: {$eq: adminId}
                                }]
                            }
                        ]
                    })
                    const myFriends = await sellerAdminModel.findOne({myId: {$eq: userId}})
                    const currentFriend_admin = myFriends.myFriend.find(s=>s.friendId===adminId)
                    responseReturn(res,200,{
                        MyFriends_admin: myFriends.myFriend || [],
                        currentFriend_admin,
                        messages
                    })
            }
            else {
                const myFriends = await sellerAdminModel.findOne({myId: {$eq: userId}})
                responseReturn(res,200,{
                    MyFriends_admin: myFriends.myFriend || []
                })
            }
            
        }
        catch(error){
            console.log(error)
        }
    }

    user_message_add = async (req,res) => {
        const {userId,sellerId,name,text} = req.body
        try {
            const message = await sellerCustomerMessageModel.create({
                senderId: userId,
                senderName: name,
                recieverId: sellerId,
                message:text
            })
            const data = await sellerCustomerModel.findOne({myId:userId})
            let myFriends = data.myFriend
            let index = myFriends.findIndex(f=>f.friendId===sellerId)
            while(index>0){
                let temp = myFriends[index]
                myFriends[index]= myFriends[index-1]
                myFriends[index-1]=temp
                index--
            }
            await sellerCustomerModel.updateOne(
                {
                    myId: userId
                },
                {
                    myFriend:myFriends
                }
            )
            const data1 = await sellerCustomerModel.findOne({myId:sellerId})
            let myFriends1 = data.myFriend
            let index1 = myFriends.findIndex(f=>f.friendId===userId)
            while(index1>0){
                let temp = myFriends[index1]
                myFriends[index1]= myFriends[index1-1]
                myFriends[index1-1]=temp
                index1--
            }
            await sellerCustomerModel.updateOne(
                {
                    myId: sellerId
                },
                {
                    myFriend:myFriends
                }
            )
            const friends = await sellerCustomerModel.findOne({myId:userId})
            let newFriends = friends.myFriend
            responseReturn(res,201,{message,newFriends})
            
        } catch (error) {
            console.log(error)
        }
    }

    user_book_add = async (req,res) => {
        const {userId,sellerId,name,book} = req.body
        try {
            const message = await sellerCustomerMessageModel.create({
                senderId: userId,
                senderName: name,
                recieverId: sellerId,
                message: "Hey can I borrow this?",
                book: book
            })
            const data = await sellerCustomerModel.findOne({myId:userId})
            let myFriends = data.myFriend
            let index = myFriends.findIndex(f=>f.friendId===sellerId)
            while(index>0){
                let temp = myFriends[index]
                myFriends[index]= myFriends[index-1]
                myFriends[index-1]=temp
                index--
            }
            await sellerCustomerModel.updateOne(
                {
                    myId: userId
                },
                {
                    myFriend:myFriends
                }
            )
            const data1 = await sellerCustomerModel.findOne({myId:sellerId})
            let myFriends1 = data.myFriend
            let index1 = myFriends.findIndex(f=>f.friendId===userId)
            while(index1>0){
                let temp = myFriends[index1]
                myFriends[index1]= myFriends[index1-1]
                myFriends[index1-1]=temp
                index1--
            }
            await sellerCustomerModel.updateOne(
                {
                    myId: sellerId
                },
                {
                    myFriend:myFriends
                }
            )
            const friends = await sellerCustomerModel.findOne({myId:userId})
            let newFriends = friends.myFriend
            responseReturn(res,201,{message,newFriends})
            
        } catch (error) {
            console.log(error)
        }
    }

    admin_message_add = async (req,res) => {
        const {userId,adminId,name,text} = req.body
        // console.log("reached here ",text)
        try {
            const message = await sellerAdminMessageModel.create({
                senderId: userId,
                senderName: name,
                recieverId: adminId, //here will be adminId
                message:text
            })
            const data = await sellerAdminModel.findOne({myId:userId})
            let myFriends = data.myFriend
            let index = myFriends.findIndex(f=>f.friendId===adminId)
            while(index>0){
                let temp = myFriends[index]
                myFriends[index]= myFriends[index-1]
                myFriends[index-1]=temp
                index--
            }
            await sellerAdminModel.updateOne(
                {
                    myId: userId
                },
                {
                    myFriend:myFriends
                }
            )
            const data1 = await sellerAdminModel.findOne({myId:adminId})
            let myFriends1 = data.myFriend
            let index1 = myFriends.findIndex(f=>f.friendId===userId)
            while(index1>0){
                let temp = myFriends[index1]
                myFriends[index1]= myFriends[index1-1]
                myFriends[index1-1]=temp
                index1--
            }
            await sellerAdminModel.updateOne(
                {
                    myId: adminId
                },
                {
                    myFriend:myFriends
                }
            )
            const friends = await sellerAdminModel.findOne({myId:userId})
            let newFriends = friends.myFriend
            // console.log("reached here ",newFriends)
            responseReturn(res,201,{message,newFriends})
            
        } catch (error) {
            console.log(error)
        }
    }

    get_user_messages = async (req,res) => {
        const {userId,sellerId} = req.body
        
        try {
            if(sellerId!==''){
                const seller = await sellerModel.findById(sellerId)
                const user = await sellerModel.findById(userId)
                    
                    const messages = await sellerCustomerMessageModel.find({
                        $or: [
                            {
                                $and: [{
                                    recieverId: {$eq: sellerId}
                                },{
                                    senderId: {$eq: userId}
                                }]
                            },{
                                $and: [{
                                    recieverId: {$eq: userId}
                                },{
                                    senderId: {$eq: sellerId}
                                }]
                            }
                        ]
                    })
                    responseReturn(res,200,{
                        messages
                    })
            }            
        }
        catch(error){
            responseReturn(res,404,{error: error})
        }
    }

    get_admin_messages = async (req,res) => {
        const {userId,sellerId} = req.body
        try {
            if(sellerId!==''){
                const seller = await adminModel.findById(sellerId)
                const user = await sellerModel.findById(userId)
                    
                    const messages = await sellerAdminMessageModel.find({
                        $or: [
                            {
                                $and: [{
                                    recieverId: {$eq: sellerId}
                                },{
                                    senderId: {$eq: userId}
                                }]
                            },{
                                $and: [{
                                    recieverId: {$eq: userId}
                                },{
                                    senderId: {$eq: sellerId}
                                }]
                            }
                        ]
                    })
                    responseReturn(res,200,{
                        messages
                    })
            }            
        }
        catch(error){
            responseReturn(res,404,{error: error})
        }
    }

    get_user_friends = async (req,res) => {
        const {sellerId} = req.body
        
        try {
            const friends = await sellerCustomerModel.findOne({myId:sellerId})
            let newFriends = friends.myFriend
            responseReturn(res,201,{newFriends})      
        }
        catch(error){
            responseReturn(res,404,{error: error})
        }
    }
    get_user_admins = async (req,res) => {
        const {sellerId} = req.body
        
        try {
            const friends = await sellerAdminModel.findOne({myId:sellerId})
            let newAdmins = friends.myFriend
            responseReturn(res,201,{newAdmins})      
        }
        catch(error){
            responseReturn(res,404,{error: error})
        }
    }

    get_recipient_books = async (req,res) => {
        const {recipientId} = req.body

       
        try{
            const recipient_books = await productModel.find({sellerId: recipientId},{ slug: 0, category: 0, author: 0, price: 0, stock: 0, discount: 0, description: 0, shopName: 0 });

            responseReturn(res,200,{recipient_books})
        }
        catch(error){
            responseReturn(res,500,{error: error.message})
        }
    }

    


    // user id is who is logged in and seller id is who they are talking to 


}

module.exports = new chatController()