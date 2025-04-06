const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async(req,res,next) => {

    // const {accessToken} = req.cookies
    const {accessToken} = req.body
    console.log(accessToken)
    
    if(!accessToken){
        return res.status(409).json({error:'Please login first'})
    }
    else{
        try{
            const deCodeToken = await jwt.verify(accessToken,process.env.SECRET)
            req.role = deCodeToken.role
            req.id = deCodeToken.id
            next()
        }
        catch(error){
            return res.status(409).json({error:'Please login first'})
        }
    }
}

module.exports.isAdmin = async(req,res,next) => {

    // const {accessToken} = req.cookies
    const {accessToken} = req.body
    console.log(req.body)
    
    if(!accessToken){
        return res.status(409).json({error:'Please login first'})
    }
    else{
        try{
            const deCodeToken = await jwt.verify(accessToken,process.env.SECRET)
            req.role = deCodeToken.role
            req.id = deCodeToken.id
            if(deCodeToken.role==='admin'){
                next()
            }
            else{
                return res.status(409).json({error:'Action unauthorized'})
            }
            
        }
        catch(error){
            return res.status(409).json({error:'Please login first'})
        }
    }
}