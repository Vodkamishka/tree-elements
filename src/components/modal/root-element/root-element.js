import React from 'react';

const RootElement = ({setModals, modals, createRootElem}) => {
    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Create root element</h5>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary"
                    onClick = {() => {
                        createRootElem();
                        setModals({
                            ...modals,
                            rooElement: false
                        })
                    }}
                    >Create</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default RootElement;