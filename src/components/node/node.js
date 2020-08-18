import React, { useState, useEffect } from 'react';
import './node.css';
import Folder from '../folder/folder';

const Node = ({parent, data, setSelectedElement, selectedElement}) => {
 
    const items = data.filter(el => el.parent === parent);
    
    const [folders, setClosedFolder] = useState(items.map(el => ({id: el.id, open: true})))

    useEffect(() => {
        setClosedFolder(items.map(el => ({id: el.id, open: true})))
    }, [data])
    
    return (
        <ul className="node">
            {items.map(el => {
                let folder = folders.filter(element => element.id === el.id)[0];
                console.log("folders",folders) 
                console.log('folder', folder)
                return (
                    <li 
                        className="node__li"
                        key={el.id}>
                            <div className="node__wrapper">
                                <Folder setClosedFolder={setClosedFolder} id={el.id} folders={folders}/>
                                <div 
                                    className = { selectedElement.id === el.id ? 
                                        "node__attributes node__atributes_selected" : "node__attributes" }
                                    onClick={(e)=> {
                                        e.stopPropagation();
                                        const x = e.nativeEvent.x - 10;
                                        const y = e.nativeEvent.y - 10;
                                        setSelectedElement({
                                            ...selectedElement,
                                            id: el.id,
                                            x, 
                                            y,
                                            tempId: el.id,
                                            showMenu: true,
                                            showEditMenu: false,
                                            showAttributes: false
                                        })
                                    }}
                                >
                                    {el.attributes.map((elem, index) => {
                                        let key = Object.keys(elem);
                                        let value = Object.values(elem)
                                        return (
                                        <div key={index}>{`${key}: ${value}`}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            {folder && folder.open && <Node  
                                parent={el.id} 
                                data={data}
                                setSelectedElement={setSelectedElement}
                                selectedElement={selectedElement}
                            />}
                    </li>
                )
        })}
        </ul>
    )
}

export default Node;