import React, { useState } from 'react';

const DeleteAttribute = ({modals, setModals, deleteAttribute, selectedElement, data}) => {
    const [select, setSelect] = useState(null)
    const setParam = e => setSelect(e.target.value)
    let attributes = data.filter(el => el.id === selectedElement.tempId)[0].attributes;
    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Delete attribute</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setModals({
                        ...modals,
                        deleteAttr: false
                    })}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="input-group mb-3 " style={{marginLeft: '20px', width: "460px"}}>
                    <select className="custom-select " id="inputGroupSelect02" onChange={setParam}>
                        <option defaultValue>Choose...</option>
                        {attributes.map((el, index) => {
                            let key = Object.keys(el);
                            return <option value={key} key={index}>{key}</option>
                        })}
                    
                </select>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModals({
                        ...modals,
                        deleteAttr: false
                    })}>Close</button>
                    <button type="button" className="btn btn-primary" 
                    onClick={() => {
                            if (select !== null) {
                                deleteAttribute(selectedElement.tempId, select);
                                setModals({
                                ...modals,
                                deleteAttr: false
                            })
                            }     
                    }}
                    >Delete</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteAttribute;