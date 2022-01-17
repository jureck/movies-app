import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import Menu from '../Menu';
import { ThemeContext } from '../../context/ThemeContext';
import Eye from '../../assets/icons/eye.svg';
import { auth } from '../../services/firebase/config';
import { basename } from '../../App';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 50px auto;

    @media (min-width: 1000px) {
        width: 40%;
    }
`
const Label = styled.label`
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    margin-top: 15px;
    margin-bottom: 3px;
    font-size: ${theme.fonts.xs};
`
const Input = styled.input`
    border: 0;
    height: 50px;
    border-radius: ${theme.properties.radiusSmall};
    font-size: ${theme.fonts.s};
    padding: 0px 10px;
    outline: none;
    width: 100%;

    &:focus {
        border: 2px solid #008ffc;
    }

    &[name="email"] {
        border: ${({ resetError }) => resetError ? "2px solid red" : "0"};
    }
   
        
 
`
const Submit = styled.button`
    color: black;
    border: 0;
    height: 50px;
    background-color: ${theme.colors.accent};
    width: 140px;
    margin: 50px auto;
    font-size: ${theme.fonts.s};
    border-radius: ${theme.properties.radiusSmall};
    transition: all .3s ease-in-out;

    &:hover {
        background-color: ${theme.colors.accentAlt};
    }
`

const HeroText = styled.p`
    display: block;
    margin: 50px auto;
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    font-size: 30px;
    text-align: center;
`

const ErrorMessage = styled.p`
    color: red;
    font-size: ${theme.fonts.xs};
`

const Message = styled.p`
    color: #2fd353;
    font-size: ${theme.fonts.xs};
`

const Redirector = styled.a`
    display: block;
    text-align: center;
    width: 100%;
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    margin-top: 30px;
`




const ResetPassword = () => {
    const {currentTheme} = useContext(ThemeContext);
    const [email, setEmail] = useState('');
    const [resetError, setResetError] = useState('');
    const [resetInfo, setResetInfo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResetError('');
        await auth().sendPasswordResetEmail(email)
        .then(() => {
            setResetInfo("Your password has been succesfully reset. Check your inbox");
        })
        .catch(() => {
            setResetError("Failed to reset");
        });
    }

    return ( 
        <>

        <Menu 
            current="Sign in"
        />
        <HeroText currentTheme={currentTheme} >
            Reset your password
        </HeroText>
        <Form onSubmit={handleSubmit}>
            <Label 
                htmlFor="email" 
                currentTheme={currentTheme}>Email
            </Label>
            <Input 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                type="email" 
                name="email"
                resetError={resetError}  
                currentTheme={currentTheme} 
            />
            {resetInfo && <Message>{resetInfo}</Message>}
            {resetError && <ErrorMessage>{resetError}</ErrorMessage>}
            <Submit 
                type="submit" 
                currentTheme={currentTheme}
            >
                Reset
            </Submit>
        </Form>
        <Redirector 
            currentTheme={currentTheme} 
            href={`${basename}/#/Sign in/`}
        >
            Sign in to your account
        </Redirector>
        </>
    );
}
 
export default ResetPassword;