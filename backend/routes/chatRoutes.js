const authControllers = require('../controllers/authControllers')
const chatController = require('../controllers/chat/chatController')
const { authMiddleware } = require('../middlewares/authMiddleware')

const router = require('express').Router()

router.post('/chat/user/add-user-friend',authMiddleware, chatController.add_user_friend)
router.post('/chat/user/send-message-to-user',authMiddleware, chatController.user_message_add)
router.post('/chat/user/get-messages',authMiddleware, chatController.get_user_messages)





module.exports = router