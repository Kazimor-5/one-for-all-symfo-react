import React from 'react'

const Success = () => {
  return (
    <div>Success</div>
  )
}

export default Success


//voici la route à mettre en back pour valider le paiement à mettre en PHP//
// const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);



// router.post("/payment", (req, res) => {
//     stripe.charges.create({
//         source: req.body.tokenId,
//         amount: req.body.amount,
//         currency: "usd",
// }, (stripeErr, stripeRes) => {
//     if (stripeErr) {
//         res.status(500).send({ error: stripeErr });
//     } else {
//         res.status(200).send({ success: stripeRes });
//     }
// })
// })
