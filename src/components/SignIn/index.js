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

    &[name="password"] {
        border: ${({ passwordError }) => passwordError === "WRONG_PASSWORD" ? "2px solid red" : "0"};
    }

    &[name="email"] {
        border: ${({ emailError }) => emailError === "WRONG_EMAIL" ? "2px solid red" : "0"};
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
const ShowPassword = styled.span`
    position: absolute;
    right: 10px;
    top: 12px;
    cursor: pointer;
`
const EyeIcon = styled.img`

`
const HeroText = styled.p`
    display: block;
    margin: 50px auto;
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    font-size: 30px;
    text-align: center;
`
const PasswordWrapper = styled.div`
    position: relative;
`
const ErrorMessage = styled.p`
    color: red;
    font-size: ${theme.fonts.xs};
`
const Redirector = styled.a`
    display: block;
    text-align: center;
    width: 100%;
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
`


const handleSubmit = async (e, email, password, setEmailError, setPasswordError) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    await auth().signInWithEmailAndPassword(email, password)
    .then((cred) => {
        localStorage.setItem("uid", cred.user.uid);
        window.location.href = `${basename}/`;
    })
    .catch((err) => {
        if(err.code === "auth/user-not-found") {
            setEmailError("WRONG_EMAIL");
        }
        if(err.code === "auth/wrong-password") {
            setPasswordError("WRONG_PASSWORD");
        }
    });
}

const SignIn = () => {
    const {currentTheme} = useContext(ThemeContext);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    return ( 
        <>

        <Menu 
            current="Sign in"
        />
        <HeroText currentTheme={currentTheme} >
            Sign in to your account
        </HeroText>
        <Form onSubmit={(e) => handleSubmit(e, email, password, setEmailError, setPasswordError)}>
            <Label 
                htmlFor="email" 
                currentTheme={currentTheme}>Email
            </Label>
            <Input 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                type="email" 
                name="email"
                emailError={emailError}  
                currentTheme={currentTheme} 
            />
            {emailError && <ErrorMessage>Email not found</ErrorMessage>}
            <Label 
                htmlFor="password" 
                currentTheme={currentTheme}
            >
                Password
            </Label>
            <PasswordWrapper>
                <Input 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} type={isPasswordHidden ? "password" : "text" } 
                    name="password" 
                    passwordError={passwordError}
                    currentTheme={currentTheme}
                />
                {passwordError && <ErrorMessage>Wrong password</ErrorMessage>}
                <ShowPassword 
                    onClick={ () => setIsPasswordHidden(!isPasswordHidden) }
                >
                    <EyeIcon 
                        src={Eye}
                    />
                </ShowPassword>
            </PasswordWrapper>
            <Submit 
                type="submit" 
                currentTheme={currentTheme}
            >
                Sign up
            </Submit>
        </Form>
        <Redirector 
            currentTheme={currentTheme} 
            href={`${basename}/#/signup/`}
        >
            Don't have an account?
        </Redirector>
        </>
    );
}
 
export default SignIn;