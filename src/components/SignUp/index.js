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
        border: ${({ passwordError }) => passwordError === "TOO_SHORT" ? "2px solid red" : "0"};
    }

    &[name="email"] {
        border: ${({ emailError }) => emailError === "EMAIL_IN_USE" ? "2px solid red" : "0"};
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
const ErrorMessage = styled.p`
    color: red;
    font-size: ${theme.fonts.xs};
`
const PasswordWrapper = styled.div`
    position: relative;
`
const Redirector = styled.a`
    display: block;
    text-align: center;
    width: 100%;
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
`



const SignUp = () => {
    
    const {currentTheme} = useContext(ThemeContext);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e, username, email, password) => {
        e.preventDefault();
        if(password.length < 6) {
            setPasswordError('TOO_SHORT');
            
        } else {
            setPasswordError('');
            setEmailError('');
            await auth().createUserWithEmailAndPassword(email, password)
            .then( async (cred) => {
                if(cred.user) {
                    await cred.user.updateProfile({displayName: username});
                }
            })
            .then(() => window.location.href = `${basename}/`)
            .catch(err => {
                if(err.code === "auth/email-already-in-use") {
                    setEmailError('EMAIL_IN_USE');
                }
            });
        }
    }

    return (
        <>

        <Menu 
            current="Sign up"
        />
        <HeroText currentTheme={currentTheme} >
            Create free acount here
        </HeroText>
        <Form onSubmit={(e) => handleSubmit(e, username, email, password)}>
            <Label 
                htmlFor="username" 
                currentTheme={currentTheme}
            >
                Username
            </Label>
            <Input 
                onChange={(e) => setUsername(e.target.value)} 
                value={username} 
                type="text" 
                name="username"  
                currentTheme={currentTheme} 
            />
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
            {emailError && <ErrorMessage>Email already in use</ErrorMessage>}
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
                    currentTheme={currentTheme}
                    passwordError={passwordError}
                />
                <ShowPassword 
                    onClick={ () => setIsPasswordHidden(!isPasswordHidden) }
                >
                    <EyeIcon 
                        src={Eye}
                    />
                </ShowPassword>
            </PasswordWrapper>
            {passwordError && <ErrorMessage>Password must have min. 6 characters</ErrorMessage>}
            <Submit 
                type="submit" 
                currentTheme={currentTheme}
            >
                Sign up
            </Submit>
        </Form>
        <Redirector 
            currentTheme={currentTheme} 
            href={`${basename}/#/Sign in/`}
        >
            Have an account already?
        </Redirector>
        </>
    );
}
 
export default SignUp;