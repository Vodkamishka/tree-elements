import React, { useState }  from 'react';
import './interface-tree.css';
import Node from '../node/node';
import Menu from '../menu/menu';
import CreateAttribute from '../modal/create-attribute/create-attribute';
import RootElement from '../modal/root-element/root-element';
import DeleteAttribute from '../modal/delete-attribute/delete-attribute';
import EditAttribute from '../modal/edit-attribute/edit-attribute';

const InterfaceTree = (props) => {
    const parent = null;
    const [selectedElement, setSelectedElement] = useState({
        id: null,
        x: null,
        y: null,
        tempId: null,
        showMenu: false,
        showEditMenu: false, 
        showAttributes: false,
    });
    const [modals, setModals] = useState({
        createAttr: false,
        rootElement: false,
        deleteAttr: false,
        editAttr: false,
    })
    return (
        <div 
            className="interface-tree"
            onClick = {() => {
                setSelectedElement({
                    ...selectedElement,
                    id: null,
                    x: null,
                    y: null,
                    showMenu: false,
                    showEditMenu: false,
                    showAttributes: false
                })  
            }} 
        >
                <Node 
                    data={props.data} 
                    parent={parent}
                    setSelectedElement={setSelectedElement}
                    selectedElement={selectedElement}
            />
            {selectedElement.showMenu && 
            <Menu 
                selectedElement={selectedElement}
                setSelectedElement={setSelectedElement}
                setModals={setModals}
                modals={modals}
                {...props}
            />}
            {modals.createAttr && 
            <CreateAttribute 
                setModals={setModals}
                modals={modals}
                selectedElement={selectedElement}
                {...props}
            />}
            {props.data.length === 0 &&<RootElement 
                setModals={setModals}
                modals={modals}
                {...props}
            />}
            {modals.deleteAttr && 
            <DeleteAttribute 
                setModals={setModals}
                modals={modals}
                selectedElement={selectedElement}
                {...props}
            />}
            {modals.editAttr &&
            <EditAttribute 
                setModals={setModals}
                modals={modals}
                selectedElement={selectedElement}
                {...props}
            />}
        </div>
    )
}

export default InterfaceTree;