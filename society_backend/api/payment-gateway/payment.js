

//const PUBLISHABLE_KEY = "pk_test_51MWzdISAP0cb61v5rv5fnOPwP560bWqZHnqc9gnwsRNFNDSl5olsPkv2MW03sGTR6n6IT27fbFnOpaT60qp1q3zY00ttnvrVtx"
const SECRET_KEY = "sk_test_51MWzdISAP0cb61v5XVaKokWwShqXFUBmR62YKGtrhOdl3Oli6SdYoN9VCT1oQSqXmLb4JS9szAA6dOUFxPcqeB6o00ieo6zAfo"
const stripe = require('stripe')(SECRET_KEY)
const express=require('express')
const app = express()
const {societies} = require('../../db_connect')

const verifyToken = require('../../jwt')

const token={
  "id": "tok_1Guxxxxxxxxxxxxxx",
  "object": "token",
  "card": {
    "id": "card_1Guxxxxxxxx",
    "object": "card",
    "brand": "Visa",
    "last4": "4242",
    "exp_month": 12,
    "exp_year": 2023,
    "name": "John Doe",
    "country": "US"
  },
  "created": 1617735054,
  "livemode": false,
  "type": "card",
  "used": false
}


app.post('/pay',verifyToken, function (req, res) {
    stripe.customers.create({
        email: "karan@gmail.com",
        name: 'karan Patel',
        source: "tok_visa_debit",
        address: {
            line1: 'TC 9/4 Old MES colony',
            postal_code: '380081',
            city: 'Ahmedabad',
            state: 'Gujarat',
            country: 'India',
        }
    })
    .then((customer) => {
            return stripe.charges.create({
                amount: 5000,     // Charging Rs 25
                description: 'Web Development Product',
                currency: 'INR',
                customer: customer.id
            });
        })
        .then((charge) => {
            res.send("Success")  // If no error occurs
        })
        .catch((err) => {
            res.send(err)       // If some error occurs
        });
})

module.exports=app