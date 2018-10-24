import styled from 'styled-components';

export const Form = styled.form`
    width: 50%;
    height: auto;
    margin: 25px auto;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    width: 10%;
    margin: 25px auto;
    color: black;
    border-left: 5px solid #d7f21b;
`

export const Span = styled.span`
    color: #d5d5d5;
    margin: 15px auto;
`
export const SpanForgotPassword = styled.span`
margin: 15px auto;
color: black;
`

export const Input = styled.input`
    width: 35%;
    height: auto;
    margin: 15px auto;
    padding: 10px;
    border: 1px solid #d9d9d9;
    &::placeholder{
        color: #c8c8c8;
        font-family: FontAwesome, Arial;
        font-size: 18px;
    }
`

export const SignupButton = styled.button`
    width: 12%;
    height: auto;
    margin: 50px auto;
    font-weight: 600;
    padding: 10px;
    background-image: linear-gradient(to bottom, rgba(211, 242, 34, 1), rgba(182,243, 115, 1));
    color: black;
    border: none;
    cursor: pointer;
`

export const SignupSpan = styled.span`
    color: #282828;
    margin: 15px auto;
`

export const SignupLink = styled.a`
    border-botton: 1px solid #d7f21b;
    cursor: pointer;    
    color:#d7f21b;
    &:link{
        color:#d7f21b
    }
    &:visited{
        color:#d7f21b
    }
`

export const SocialMediaDiv = styled.div`
    width: 40%;
    height: auto;
    margin: 0 auto 20px auto;
    padding: 10px;
    border-top: 1px solid #f0f0f0;
    display: flex;
    flex-direction: row;
`

export const SocialMediaIcon = styled.div`
    width: 10%;
    margin: 10px auto;    
    padding: 15px;
    border-radius: 50%;
    border: 1px solid #daf33d;
    color: #daf33d;
    cursor: pointer;
`