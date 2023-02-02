

const PUBLISHABLE_KEY = "pk_test_51MWzdISAP0cb61v5rv5fnOPwP560bWqZHnqc9gnwsRNFNDSl5olsPkv2MW03sGTR6n6IT27fbFnOpaT60qp1q3zY00ttnvrVtx"
const SECRET_KEY = "sk_test_51MWzdISAP0cb61v5XVaKokWwShqXFUBmR62YKGtrhOdl3Oli6SdYoN9VCT1oQSqXmLb4JS9szAA6dOUFxPcqeB6o00ieo6zAfo"
const stripe = require('stripe')(SECRET_KEY)
const express=require('express')
const app = express()
const verifyToken = require('../../jwt')

app.post('/payment',verifyToken,(req,res)=>{
    
})
