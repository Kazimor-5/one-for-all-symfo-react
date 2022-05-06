import StripeCheckout from "react-stripe-checkout"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

//la clé de stripe est sur le site de stripe, après s'être connecté, puis cliquer sur DEVELOPPEURS, en haut à droite. Ensuite cliqué sur "Clés API" dans le menu de gauche. La clé à prendre est la Clé pubique//
const KEY = "pk_test_51Ko1CAJ0KfflJ9gBfABeqciua1XIUm6OWJHEpJN3q6x6iTFQQ9jt3QUWdL7zfQjpD5AKZm6QTR2wZhoQHVxKEEuw00lI48Tmhu"


const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()

    const onToken = token => {
        setStripeToken(token)
    }

    //recuperer les donnees du backend//
    useEffect(() => {
        const getRequest = async () => {
            try{
              const response = await axios.post(
                  //mettre le lien de l'api ici//
                  "http://localhost:5000/api/checkout/payment", {
                      tokenId: stripeToken.id,
                      amount: 2000
                  }
                  )
                  console.log(response.data)
                    navigate.push("/success")
            } catch(err) {
                console.log(err)
            }
        }
        stripeToken && getRequest()
    }, [stripeToken, navigate])


  return (
      <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh"
            
      }}>
    {stripeToken ? (
    <span>Merci de patienter...</span>
    ) : (
        <StripeCheckout 
        name="Stripe Demo" 
        image="https://avatars.githubusercontent.com/u/85236399?s=400&u=6b10e4b19374e7a23d13146d2987fb179698f548&v=4"
        billingAddress
    shippingAddress
    description = "On y est presque"
    amount={2000}
    token={onToken}
    stripeKey={KEY}>
    <button
    style={{
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }}>Payer maintenant</button>
    </StripeCheckout>
    )}
    </div>
  )
}

export default Pay


