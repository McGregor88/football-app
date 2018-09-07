import React from 'react';
import './formFields.css';

const FormField = ({formdata, change, id}) => {

    const renderTemplate = () => {
        let formTemplate = null;

        switch(formdata.element) {
            case('input'):
                formTemplate = (
                    <div className="form-element__in">
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            className="input"
                            onBlur={(event) => change( {event, id, blur:true} )}
                            onChange={(event) => change( {event, id, blur:false} )}
                        />
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
            {renderTemplate()}
        </div>
    )

}

export default FormField;