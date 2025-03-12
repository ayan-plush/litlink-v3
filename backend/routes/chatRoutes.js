const authControllers = require('../controllers/authControllers')
const chatController = require('../controllers/chat/chatController')

const router = require('express').Router()

router.post('/chat/user/add-user-friend', chatController.add_user_friend)
router.post('/chat/user/send-message-to-user', chatController.user_message_add)
router.post('/chat/user/get-messages', chatController.get_user_messages)
router.post('/chat/user/get-friends', chatController.get_user_friends)






module.exports = router