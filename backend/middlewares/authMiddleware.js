const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async(req,res,next) => {
    // const {accessToken} = req.cookies
    console.log(req.body)
    const {token} = req.body
    //replacing accessToken with token 
    console.log(token,'accessToken')
    if(!token){
        return res.status(409).json({error:'Please login first'})

    }
    else{
        try{
            const deCodeToken = await jwt.verify(token,process.env.SECRET)
            console.log(token,process.env.SECRET)
            console.log(deCodeToken.role,deCodeToken.id)
            req.role = deCodeToken.role
            req.id = deCodeToken.id
            next()
        }
        catch(error){
            return res.status(409).json({error:'Please login first'})
        }
    }
}