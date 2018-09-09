import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import FormField from '../widgets/FormFields/formFields';
import './dashboard.css';

class Dashboard extends Component {

    state = {
        postError: '',
        loading: false,
        formdata: {
            author: {
                element: 'input',
                value: '',
                config: {
                    name: 'author',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            title: {
                element: 'input',
                value: '',
                config: {
                    name: 'title',
                    type: 'text',
                    placeholder: 'Enter the title'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
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

        this.setState({
            formdata: newFormdata
        })

    }

    validate = (element) => {
        let error = [true, ''];

        if(element.validation.required) {
            const valid = element.value.trim() !== '';
            const message = `${!valid ? 'This field is required' : ''}`;

            error = !valid ? [valid, message] : error
        }
        
        return error;
    }

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata) {
            dataToSubmit[key] = this.state.formdata[key].value
        }
        for(let key in this.state.formdata) {
            formIsValid = this.state.formdata[key].valid && formIsValid
        }

        console.log(dataToSubmit)

        if(formIsValid) {
            console.log('Submitted!')
        } else {
            this.setState({
                postError: 'Something went wrong'
            })
        }
    }


    submitButton = () => (
        this.state.loading ?
            'loading...'
        :
        <div className="form-submit text-center">
            <Button 
                variant="contained" 
                color="primary" 
                size="large"
                type="submit"
            >
                Add Post
            </Button>
        </div>
    )

    showError = () => (
        this.state.postError !== '' ?
            <div className="error-box text-center">{this.state.postError}</div>
        : ''
    )

    render() {
        return (
            <div className="post-container">
                <form 
                    onSubmit={this.submitForm}
                    className="form" 
                    noValidate 
                    autoComplete="off"
                >
                    <h2 className="post-title">Add Post</h2>
                    <div className="post-caption">Dashboard</div>
                    <div className="fieldset">
                        <FormField
                            id={'author'}
                            formdata={this.state.formdata.author}
                            change={ (element) => this.updateForm(element) }
                        />
                        <FormField
                            id={'title'}
                            formdata={this.state.formdata.title}
                            change={ (element) => this.updateForm(element) }
                        />
                    </div>

                    { this.submitButton() }
                    { this.showError() }
                </form>
            </div>
        )
    }
}

export default Dashboard;
