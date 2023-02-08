const express = require('express');
const bcrypt = require("bcrypt")
const app = express()
const jwt = require('jsonwebtoken')
const {user} = require('./db_connect')
const route =require('./api/society/society.routes')
const payment_route=require('./api/payment-gateway/payment')
app.listen(3000,()=>{
    console.log("App is listening on 3000")
})

app.use(express.json())
app.use('/api',route)
app.use('/api',payment_route)


app.post('/signup',(req, res)=>{
   const saltRounds=10
   let password=bcrypt.hash(req.body.password,saltRounds)
   .then(hashedPassword=>{
        console.log(hashedPassword)
        user.create({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
        })
        .then(user=>{
          res.json(user)
        })
        .catch(err=>{
            res.status(400).json(err)
        }) 
   })
   .catch(err=>{
    console.log(err)
   })
  console.log(password)
 
})

app.post('/login',(req,res)=>{
    user.findOne({where:{email:req.body.email}}).then(user=>{
                if(!user){
                    return res.status(400).json({ error: 'User not found' });
        }
      bcrypt.compare(req.body.password, user.password)
      .then(result => {
        if(result){
          const token = jwt.sign({ id: user.id }, "secret_key");
          console.log(token)
          res.json({ token });
        }
        else{
          res.status(400).json({ error: 'Incorrect password' })
        }
      })
      .catch(err => console.log(err))
      //   if (user.password !== req.body.password) {
      //   return res.status(400).json({ error: 'Incorrect password' });
      // }

      // const token = jwt.sign({ id: user.id }, "secret_key");
      // console.log(token)
      // res.json({ token });
    })
    .catch(error => {
      res.status(400).json({ error: 'Login failed' });
    })
})