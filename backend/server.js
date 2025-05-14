const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { dbConnect } = require('./utils/db')
const socket = require('socket.io')
const http = require('http')
const sellerModel = require('./models/sellerModel')
const server = http.createServer(app)
require('dotenv').config()

const CORSBASE = process.env.BASE_URL
console.log('CORSBASE:', process.env.BASE_URL);


app.use(cors({
    origin : [`${CORSBASE}`], // idk if this is good tho process.env.BASE_URL 
    methods : "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials : true
}))

const io = socket(server,{
    cors: {
        origin: [process.env.BASE_URL],
        credentials: true
    }
})

var allCustomer = []
const addUser = (userId,socketId,userInfo) =>{
    const checkUser = allCustomer.some(u=>u.userId === userId)
    if(!checkUser){
        allCustomer.push({
            userId,
            socketId,
            userInfo
        })
    }

}

const remove = (socketId) =>{
    allCustomer = allCustomer.filter(c=>c.socketId!==socketId)
}

const findUser = (userId) => {
    return allCustomer.find(u=>u.userId===userId)    
    
}


io.on('connection', (soc) => {
    console.log('Socket server running..')
    soc.on('add_user',(userId,userInfo)=>{
        addUser(userId,soc.id,userInfo)
        io.emit('activeUser',allCustomer)
    })
    soc.on('send_user_message',(msg)=>{
        const user = findUser(msg.recieverId)
        // console.log("this is user",user);
        if(user!==undefined){
            soc.to(user.socketId).emit('user_message',msg)
        }
    })
    soc.on('disconnect',()=>{
        console.log('user disconnected')
        remove(soc.id)
        io.emit('activeUser',allCustomer)
    })
})

app.use(bodyParser.json())
app.use(cookieParser())
app.use('/api', require('./routes/authRoutes'))
app.use('/api', require('./routes/home/homeRoutes'))
app.use('/api', require('./routes/home/wishlistRoutes'))
app.use('/api', require('./routes/chatRoutes'))

app.use('/api', require('./routes/dashboard/categoryRoutes'))
app.use('/api', require('./routes/dashboard/sellerRoutes'))
app.use('/api', require('./routes/dashboard/productRoutes'))
app.get('/',(req,res)=>res.send('My backend'))
const port = process.env.PORT 
dbConnect()
server.listen(port, ()=> console.log(`server is running on PORT ${port}`))
