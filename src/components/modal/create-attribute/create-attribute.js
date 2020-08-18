import React, { useState } from 'react';
import './create-attribute.css';

const CreateAttribute = ({modals, setModals, createAttribute, selectedElement}) => {
    const [values, setValue] = useState({
        name: null,
        value: null
    })
    const setParam = (field, e) => {
        setValue({
        ...values,
        [field]: e.target.value
    })}
    
    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Create attribute</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setModals({
                        ...modals,
                        createAttr: false
                    })}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping">name</span>
                        </div>
                    <input type="text" className="form-control"  aria-label="Username" 
                    aria-describedby="addon-wrapping" onChange={(e) => setParam("name", e)}/>
                    </div>
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrappings">value</span>
                        </div>
                    <input type="text" className="form-control"  aria-label="Username" 
                    aria-describedby="addon-wrapping" onChange={(e) => setParam("value", e)}/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModals({
                        ...modals,
                        createAttr: false
                    })}>Close</button>
                    <button type="button" className="btn btn-primary" 
                    onClick={() => {
                        const {value, name} = values;
                        if (value && name ) {
                            createAttribute(name, value, selectedElement.tempId);
                            setModals({
                                ...modals,
                                createAttr: false
                            })
                        }
                    }}
                    >Create</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAttribute;