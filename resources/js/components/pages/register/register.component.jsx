import React from 'react';

import FormInput from './../../form-input/form-input.component';
import CustomButton from './../../custom-button/custom-button.component';

import {RegisterContainer, RegisterTitle} from './register.styles';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        const {displayName, email, password, confirmPassword}=this.state;

        if(password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        alert(`Registration Details: \nDisplay Name: ${displayName} \nEmail: ${email} \nPassword: ${password} `);

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    handleChange (event) {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword}=this.state;
        return (
            <RegisterContainer>
                <RegisterTitle>I do not have a account</RegisterTitle>
                <span> Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput 
                        type='email' 
                        name='email' 
                        value={email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required  
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>REGISTER</CustomButton>
                </form>
            </RegisterContainer>
        )
    }
}

export default Register;