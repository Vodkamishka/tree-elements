import React from 'react';
import './attributes-menu.css';

const AttributesMenu = ({setModals, modals}) => {
    return (
        <ul className="attributesMenu__ul">
            <li 
                className="attributesMenu__li"
                onClick={() => setModals({
                    ...modals,
                    createAttr: true
                })}
            >
                Create
            </li>
            <li
                 className="attributesMenu__li"
                 onClick={() => setModals({
                    ...modals,
                    deleteAttr: true
                })}
            >
                Delete
            </li>
            <li 
                className="attributesMenu__li"
                onClick={() => setModals({
                    ...modals,
                    editAttr: true
                })}
            >
                Edit
            </li> 
        </ul>
    )
}

export default AttributesMenu;