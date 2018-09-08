import React from 'react';
import TextField from '@material-ui/core/TextField';

import './formFields.css';

const FormField = ({formdata, change, id}) => {

    const showError = () => {
        let errorMessage = null;

        if(formdata.validation && !formdata.valid) {
            errorMessage = (
                <div className="error-box">
                    {formdata.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

    const renderTemplate = () => {
        let formTemplate = null;

        switch(formdata.element) {
            case('input'):
                formTemplate = (
                    <div className="form-element__in">
                        <TextField
                            margin="normal"
                            label={formdata.config.placeholder}
                            className="input"
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change( {event, id, blur:true} )}
                            onChange={(event) => change( {event, id, blur:false} )}
                        />
                        { showError() }
                    </div>
                )
                break;

            default:
                formTemplate = null;
        }
        return formTemplate;
    }

    return (
        <div className="form-element">
            { renderTemplate() }
        </div>
    )

}

export default FormField;