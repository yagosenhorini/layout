import React, { Component } from 'react';
import '../App.scss';
import { Form, Title, Span, Input, SignupButton, SignupLink, SignupSpan } from '../components/Components';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Title>Signup</Title>
        <Span>Please register to continue</Span>
        <Form>
          <Input placeholder="&#xf007; User" />
          <Input placeholder="&#xf0e0; Email Address" />
          <Input placeholder="&#xf084; Password" />
          <SignupButton><Link to="/dashboard">Signup</Link></SignupButton>
        </Form>
        <SignupSpan>Already have an account?
          <SignupLink><Link to="/login">Sign up</Link></SignupLink>
        </SignupSpan>
      </main>
    );
  }
}

export default App;