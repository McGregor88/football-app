import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

            case('select'):
                formTemplate = (
                    <div className="select-box">
                        <FormControl className="formControl">
                            <InputLabel htmlFor={id}>Select team</InputLabel>
                            <Select
                                value={formdata.value}
                                onChange={(event) => change( {event, id, blur:false} )}
                                inputProps={{
                                    name: formdata.config.name,
                                    id: id
                                }}
                                autoWidth={true}
                            >
                            {formdata.config.options.map((item, i) => (
                                <MenuItem key={i} value={item.id}>{item.name}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
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