const addNode = (id, parentId) => {
    return {
        type: "ADD_NODE",
        payload: {
            id,
            parentId
        }
    }
}
const deleteNode = (id) => {
    return {
        type: "DELETE_NODE",
        payload: id
    }
}
const cutNode = id => {
    return {
        type: "CUT_NODE",
        payload: id
    }
}
const pasteNode = id => {
    return {
        type: "PASTE_NODE",
        payload: id
    }
}
const copyNode = id => {
    return {
        type: "COPY_NODE",
        payload: id
    }
}
const createAttribute = (name, value, id) => {
    return {
        type: "CREATE_ATTRIBUTE",
        payload: {
            name,
            value,
            id
        }
    }
}
const deleteAttribute = (id, key) => {
    return {
        type: "DELETE_ATTRIBUTE",
        payload: {
            id,
            key
        }
    }
}
const editAttributes = (id, attributes) => {
    return {
        type: "EDIT_ATTRIBUTES",
        payload: {
            id,
            attributes
        }
    }
}
const createRootElem = () => {
    return {
        type: "CREATE_ROOT"
    }
}

export { addNode, deleteNode, cutNode, pasteNode, editAttributes,
    copyNode, createAttribute, createRootElem, deleteAttribute };