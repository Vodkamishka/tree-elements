import React, { useState } from 'react';
import './edit-attribute.css';

const EditAttribute = ({modals, setModals, editAttributes, selectedElement, data}) => {
    const attributes = data.filter(el => el.id === selectedElement.tempId)[0].attributes;
    const [values, setValue] = useState(attributes);
    const setParam = (field, e, index) => {
        const key = field === "key" ? e.target.value : Object.keys(values[index]);
        const val = field === "value" ? e.target.value : Object.values(values[index]);
        setValue([
            ...values.slice(0, index),
            {[key]: val},
            ...values.slice(index + 1)
        ])
    }
    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit attributes</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setModals({
                        ...modals,
                        editAttr: false
                    })}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-bodys">
                    {attributes.map((el, index) => {
                        const key = Object.keys(el);
                        const value = Object.values(el);
                        return (
                            <div className = "wrapper__input" key={index}>
                                <div className="input-group flex-nowrap">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="addon-wrapping">key</span>
                                    </div>
                                    <input type="text" className="form-control"  value={Object.keys(values[index])}
                                    aria-describedby="addon-wrapping" onChange={(e) => setParam("key", e, index)}/>
                                </div>
                                <div className="input-group flex-nowrap">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="addon-wrappings">value</span>
                                    </div>
                                    <input type="text" className="form-control"  value={Object.values(values[index])}
                                    aria-describedby="addon-wrapping" onChange={(e) => setParam("value", e, index)}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModals({
                        ...modals,
                        editAttr: false
                    })}>Close</button>
                    <button type="button" className="btn btn-primary" 
                    onClick={() => {
                        values.forEach(el => {
                            const key = Object.keys(el)[0];
                            const value = Object.values(el)[0]; 
                         
                            if (key && value) {
                                editAttributes(selectedElement.tempId, values);
                                setModals({
                                    ...modals,
                                    editAttr: false
                                })
                            }
                        })
                    }}
                    >Edit</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default EditAttribute;