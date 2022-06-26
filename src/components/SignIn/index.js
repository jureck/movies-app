import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/GlobalTheme';
import Menu from '../Menu';
import { ThemeContext } from '../../context/ThemeContext';
import Eye from '../../assets/icons/eye.svg';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 

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
    border: ${({ isError }) => isError ? "2px solid red" : "0"};
    height: 50px;
    border-radius: ${theme.properties.radiusSmall};
    font-size: ${theme.fonts.s};
    padding: 0px 10px;
    outline: none;
    width: 100%;

    &:focus {
        border: 2px solid #008ffc;
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
const Redirector = styled.span`
    text-decoration: underline;
    cursor: pointer;
    display: block;
    text-align: center;
    width: 100%;
    color: ${({ currentTheme }) => theme[currentTheme].colors.syntax};
    margin-top: 30px;
`

const SignIn = () => {
    const {currentTheme} = useContext(ThemeContext);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthError, setIsAuthError] = useState(false);
    const history = useHistory();
    const { signIn } = useAuth();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAuthError(false);
        signIn(email, password)
        .then(() => {
            history.push('/');
        })
        .catch(() => {
            setIsAuthError(true);
        });
    }

    return ( 
        <>

        <Menu 
            current="Sign in"
        />
        <HeroText currentTheme={currentTheme} >
            Sign in to your account
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
                isError={isAuthError} 
                currentTheme={currentTheme} 
            />
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
                    isError={isAuthError}
                    currentTheme={currentTheme}
                />
                <ShowPassword 
                    onClick={ () => setIsPasswordHidden(!isPasswordHidden) }
                >
                    <EyeIcon 
                        src={Eye}
                    />
                </ShowPassword>
                {isAuthError && <ErrorMessage>Invalid email or password</ErrorMessage>}
            </PasswordWrapper>
            <Submit 
                type="submit" 
                currentTheme={currentTheme}
            >
                Sign in
            </Submit>
        </Form>
        <Redirector 
            currentTheme={currentTheme} 
            onClick={() => history.push('/reset-password')}
        >
            Forgot password?
        </Redirector>
        <Redirector 
            currentTheme={currentTheme} 
            onClick={() => history.push('/sign-up')}
        >
            Don't have an account?
        </Redirector>
        </>
    );
}
 
export default SignIn;