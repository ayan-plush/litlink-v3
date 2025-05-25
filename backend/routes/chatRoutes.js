const authControllers = require('../controllers/authControllers')
const chatController = require('../controllers/chat/chatController')

const router = require('express').Router()

router.post('/chat/user/add-user-friend', chatController.add_user_friend)
router.post('/chat/user/send-message-to-user', chatController.user_message_add)
router.post('/chat/user/send-book-to-user', chatController.user_book_add)
router.post('/chat/user/send-message-to-admin', chatController.admin_message_add)
router.post('/chat/user/get-messages', chatController.get_user_messages)
router.post('/chat/user/get-friends', chatController.get_user_friends)
router.post('/chat/user/add-user-admin', chatController.add_user_admin)
router.post('/chat/user/get-admins', chatController.get_user_admins)
router.post('/chat/user/get-admin-messages', chatController.get_admin_messages)
router.post('/chat/user/get-recipient-books', chatController.get_recipient_books)







module.exports = router