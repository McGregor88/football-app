import React, { Component } from 'react';

import './signin.css';
import FormField from '../widgets/FormFields/formFields';

class SignIn extends Component {

    state = {
        registerError: '',
        loading: false,
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true,
                    password: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = {
            ...this.state.formdata
        }
        const newElement = {
            ...newFormdata[element.id]
        }

        newElement.value = element.event.target.value;
        if(element.blur) {
            let validData = this.validate(newElement);

            newElement.valid = validData[0];
            newElement.validationMessage = validData[1];
        }

        newElement.touched = element.blur;
        newFormdata[element.id] = newElement;

        //console.log(newFormdata)

        this.setState({
            formdata: newFormdata
        })

    }

    validate = (element) => {
        let error = [true, ''];

        if(element.validation.email) {
            const valid = /\S+@\S+\.\S+/.test(element.value);
            const message = `${!valid ? 'Must be a valid email' : ''}`;

            error = !valid ? [valid, message] : error
        }

        if(element.validation.password) {
            const valid = element.value.length >= 6;
            const message = `${!valid ? 'Must be greater than 5' : ''}`;

            error = !valid ? [valid, message] : error
        }

        if(element.validation.required) {
            const valid = element.value.trim() !== '';
            const message = `${!valid ? 'This field is required' : ''}`;

            error = !valid ? [valid, message] : error
        }
        
        return error;
    }

    render() {
        return (
            <div className="log-container">
                <h2 className="log-title">Register / Log in</h2>
                <form className="form">
                    <div className="form__data">
                        <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element) => this.updateForm(element)}
                        />
                        <FormField
                            id={'password'}
                            formdata={this.state.formdata.password}
                            change={(element) => this.updateForm(element)}
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;