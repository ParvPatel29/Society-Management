const jwt =require('jsonwebtoken')

const JWT_KEY="secret_key"
module.exports={
    verifyToken:(req,res,next)=>{
        
        token  = req.headers.authorization
        token=token.split(" ")
        token = token[1]
         console.log(token)
        if(!token){
            res.status(401).send({message:"Unauthorized Access"})
        }
        jwt.verify(token,JWT_KEY,(err,decoded)=>{
            if(err){
                console.log(err)
                res.status(401).send({message:"Invalid Token"})
            }
            else{
              req.user = decoded;
              next();
            }  
        })
    }
}