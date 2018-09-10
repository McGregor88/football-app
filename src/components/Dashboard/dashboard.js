import React, { Component } from 'react';
import { firebaseTeams } from '../../firebase';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Button from '@material-ui/core/Button';

import Uploader from '../widgets/FileUploader/fileUploader';
import FormField from '../widgets/FormFields/formFields';
import './dashboard.css';

class Dashboard extends Component {

    state = {
        editorState: EditorState.createEmpty(),
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
            body: {
                element: 'texteditor',
                value: '',
                valid: true
            },
            image: {
                element: 'image',
                value: '',
                valid: true
            },
            teams: {
                element: 'select',
                value: '',
                config: {
                    name: 'teams',
                    options: []
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }

        }
    }

    componentDidMount() {
        this.loadTeams()
    }

    loadTeams = () => {
        firebaseTeams.once('value')
        .then((snapshot) => {
            let teams = [];

            snapshot.forEach((childSnapshot) => {
                teams.push({
                    id: childSnapshot.val().id,
                    name: childSnapshot.val().name
                })
            })
            const newFormdata = {...this.state.formdata};
            const newElement = {...newFormdata['teams']};

            newElement.config.options = teams;
            newFormdata['teams'] = newElement;

            this.setState({
                formdata: newFormdata
            })
        })
    }

    updateForm = (element, content = '') => {
        const newFormdata = {
            ...this.state.formdata
        }
        const newElement = {
            ...newFormdata[element.id]
        }

        if(content === '') {
            newElement.value = element.event.target.value;
        } else {
            newElement.value = content;
        }

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
            const valid = element.value.toString().trim() !== '';
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

    onEditorStateChange = (editorState) => {

        let contentState = editorState.getCurrentContent();
        let rawState = convertToRaw(contentState);
        let html = stateToHTML(contentState)

        this.updateForm({id:'body'}, html)

        this.setState({
            editorState
        })
    }

    storeFilename = (filename) => {
        this.updateForm({id:'image'}, filename)
    }

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
                    <Uploader 
                        filename={ (filename) => this.storeFilename(filename) }       
                    />
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

                        <Editor
                            editorState={this.state.editorState}
                            wrapperClassName="editor-wrapper"
                            editorClassName="editor-default"
                            onEditorStateChange={this.onEditorStateChange}
                        />

                        <FormField
                            id={'teams'}
                            formdata={this.state.formdata.teams}
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
