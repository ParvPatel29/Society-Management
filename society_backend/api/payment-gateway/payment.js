

const PUBLISHABLE_KEY = "pk_test_51MWzdISAP0cb61v5rv5fnOPwP560bWqZHnqc9gnwsRNFNDSl5olsPkv2MW03sGTR6n6IT27fbFnOpaT60qp1q3zY00ttnvrVtx"
const SECRET_KEY = "sk_test_51MWzdISAP0cb61v5XVaKokWwShqXFUBmR62YKGtrhOdl3Oli6SdYoN9VCT1oQSqXmLb4JS9szAA6dOUFxPcqeB6o00ieo6zAfo"
const stripe = require('stripe')(SECRET_KEY)
const express=require('express')
const app = express()
const verifyToken = require('../../jwt')

app.post('/payment', function (req, res) {

    // Moreover you can take more details from user
    // like Address, Name, etc from form
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: 'Gourav Hammad',
        address: {
            line1: 'TC 9/4 Old MES colony',
            postal_code: '452331',
            city: 'Indore',
            state: 'Madhya Pradesh',
            country: 'India',
        }
    })
        .then((customer) => {

            return stripe.charges.create({
                amount: 2500,     // Charging Rs 25
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
