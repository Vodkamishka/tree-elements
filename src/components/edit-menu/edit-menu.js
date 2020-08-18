import React from 'react';
import './edit-menu.css';

const EditMenu = ({ selectedElement, cutNode, cut, pasteNode, copy, copyNode }) => {
    return (
        <ul className="editMenu__ul">
            <li 
                className="editMenu__li"
                onClick={() => {
                    copyNode(null);
                    cutNode(selectedElement.id);
                }}
            >
                    Cut
            </li>
            <li 
                className="editMenu__li"
                onClick={() => {
                    cutNode(null);
                    copyNode(selectedElement.id);
                }}
            >
                Copy
            </li>
            {cut || copy ? 
            <li 
                className="editMenu__li"
                onClick={() => {
                    pasteNode(selectedElement.id);
                    cutNode(null);
                }}
            >
                Paste
            </li>  : null}
        </ul>
    )
}

export default EditMenu;