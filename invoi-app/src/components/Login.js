import React from 'react'
import styled from '@emotion/styled';
import bg from '../assets/login-background-invoi.png'
import invoiLogo from '../assets/invoi-combined-shape.png';
import btnGoogle from '../assets/btn-google-signin-dark.png';

function Login() {
    return (
        <Background className='login__container'>
            <InvoiBackground>
                <img src={invoiLogo} alt="blue circle 1/6 missing from the top"/>
                <h1>invoi</h1>
            </InvoiBackground>
            <img src={btnGoogle} alt="sign in with google button"/>
        </Background>
    )
}

const Background = styled.div`
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        margin-top: 1.5%;
    }
    img:hover {
        cursor: pointer;
    }
`
const InvoiBackground = styled.div`
    width: 350px;
    height: 284px;
    background: #FFFFFF;
    box-shadow: 0px 10px 10px -10px rgba(12, 14, 22, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        margin-top: -20px;
        padding-bottom: 40px;
    }

    h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 15px;
        letter-spacing: -0.25px
    }
`


export default Login;
