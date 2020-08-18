import React from 'react';
import './menu.css';
import EditMenu from '../edit-menu/edit-menu';
import AttributesMenu from '../attributes-menu/attributes-menu';

const Menu = (props) => {
    const { selectedElement, addNode, data, deleteNode,  setSelectedElement } = props;
    const style = {
        top: selectedElement.y + "px",
        left: selectedElement.x + "px"
    }
    return (
        <div className="menu" style={style}>
            <ul 
                className='menu__ul'
            >
                    <li 
                        className="menu__li"
                        onClick={() => addNode(data.length, selectedElement.id)}
                        onMouseEnter={() => setSelectedElement({
                            ...selectedElement,
                            showEditMenu: false,
                            showAttributes: false
                        })}
                    >
                            Create
                    </li>
                    <li 
                        className="menu__li"
                        onMouseEnter={() => setSelectedElement({
                            ...selectedElement,
                            showEditMenu: false,
                            showAttributes: true
                        })}
                    >
                        Attributes
                    </li>
                    <li 
                        className="menu__li"
                        onClick={() => deleteNode(selectedElement.id)}
                        onMouseEnter={() => setSelectedElement({
                            ...selectedElement,
                            showEditMenu: false,
                            showAttributes: false
                        })}
                    >
                        Delete
                    </li>
                    <li 
                        className="menu__li"
                        onMouseEnter={() => setSelectedElement({
                            ...selectedElement,
                            showAttributes: false,
                            showEditMenu: true,
                        })}
                    >
                        Edit
                    </li>
            </ul>
            {selectedElement.showEditMenu && <EditMenu {...props} />}
            {selectedElement.showAttributes && <AttributesMenu {...props}/>}
        </div>
    )
}

export default Menu;