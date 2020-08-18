import React from 'react';

const Folder = ({setClosedFolder, id, folders}) => {
    
    let folder = folders.filter(element => element.id === id)[0];
    
    const newFolders = folders.filter(element => element.id !== id);
   return (
        <img 
            src={folder && folder.open ? "images/opened.png" : "images/closed.png"}
            alt="folder"
            className="node__folder"
            onClick={() => {
                setClosedFolder([
                ...newFolders,
                {
                    ...folder,
                    open: !folder.open
                }
            ])}}
        />
    )
}

export default Folder;