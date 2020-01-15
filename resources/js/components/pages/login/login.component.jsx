import React from 'react';
import FormInput from './../../form-input/form-input.component';
import CustomButton from './../../custom-button/custom-button.component';

import {LoginContainer, LoginTitle, ButtonsBarContainer} from './login.styles';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const {email, password}= this.state;
        alert(`Email: ${email} \nPassword: ${password} `);
        this.setState({email:'', password:''});
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render(){
        return(
            <LoginContainer>
                <LoginTitle>I already have an account</LoginTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required  
                    />
                    <FormInput 
                        type='password' 
                        name='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label='password'
                        required 
                    />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'> LOGIN </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </LoginContainer>
        );
    }
}

export default Login;
