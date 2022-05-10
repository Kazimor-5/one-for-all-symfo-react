import Styled from 'styled-components';
import { mobile } from '../../../responsive';

const Container = Styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.unsplash.com/photo-1648737851580-d6114214581b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")no-repeat center center fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;`;

const Wrapper = Styled.div`
    padding: 20px;
    width: 25%;
    background: white;
    ${mobile({ width: '100%' })}`;

const Title = Styled.h1`
    font-size: 24px;
    font-weight: bold;`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;`;

const Input = Styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px;
    padding: 10px;`;

const Button = Styled.button`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background: #00bcd4;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    font-size: 16px;`;

const Link = Styled.a`
    font-size: 12px;
    margin: 10px 0;
    text-decoration: underline;
    color: #00bcd4;
    cursor: pointer;`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SE CONNECTER</Title>
        <Form>
          <Input type='text' placeholder='Nom utilisateur' />
          <Input type='text' placeholder='Password' />
          <Button>Connexion</Button>
          <Link>VOUS AVEZ OUBLIÉ VOTRE MOT DE PASSE ?</Link>
          <Link>Créer un nouveau mot de passe</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
