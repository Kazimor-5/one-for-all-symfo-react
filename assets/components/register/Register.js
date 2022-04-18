import Styled from 'styled-components'
import { mobile } from '../../../responsive'

const Container = Styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=crop&w=1350&q=80")no-repeat center center fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;`

const Wrapper = Styled.div`
    padding: 20px;
    width: 40%;
    background: white;
    ${mobile({width: "100%"})}`

const Title = Styled.h1`
    font-size: 24px;
    font-weight: bold;`

const Form = Styled.form`
    display: flex;
    flex-wrap: wrap;`

const Input = Styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px;
    padding: 10px;`

const Agreement = Styled.span`
    font-size: 12px;
    margin: 10px 0;`

const Button = Styled.button`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background: #00bcd4;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    font-size: 16px;`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Créer un compte</Title>
            <Form>
                <Input type="radio" name="sexe" value="homme">Monsieur</Input>
                <Input type="radio" name="sexe" value="femme">Madame</Input>
                <Input type="text" placeholder="Nom" />
                <Input type="text" placeholder="Prénom" />
                <Input type="date" placeholder="Date de naissance" />
                <Input type="text" placeholder="Adresse" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Mot de passe" />
                <Input type="password" placeholder="Confirmer mot de passe" />
                <Agreement>En créant un compte, je consens au traitement de mes données personnelles conformément à la <b>POLITIQUE DE CONFIDENTIALITÉ</b>.</Agreement>
                <Button>Créer un compte</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register