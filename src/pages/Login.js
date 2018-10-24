import React from 'react';
import '../App.scss';
import { Form, Title, Span, Input, SignupButton, SignupLink, SignupSpan, SocialMediaDiv, SocialMediaIcon, SpanForgotPassword } from '../components/Components';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <main className="App">
                <Title>Login</Title>
                <Span>Please enter your login details to continue</Span>
                <Form>
                    <Input placeholder="&#xf0e0; Email Address" />
                    <Input placeholder="&#xf084; Password" />
                    <SpanForgotPassword>Forgot password?</SpanForgotPassword>
                    <SignupButton><Link to="/dashboard">Login</Link></SignupButton>
                </Form>
                <SocialMediaDiv>
                    <SocialMediaIcon>
                        <i className="fa fa-google-plus"></i>
                    </SocialMediaIcon>
                    <SocialMediaIcon>
                        <i className="fa fa-facebook-f"></i>
                    </SocialMediaIcon>
                    <SocialMediaIcon>
                        <i className="fa fa-twitter"></i>
                    </SocialMediaIcon>
                </SocialMediaDiv>
                <SignupSpan>Don't have an account? <SignupLink><Link to="/">Sign up</Link></SignupLink></SignupSpan>
            </main>
        );
    }
} 

export default Login;