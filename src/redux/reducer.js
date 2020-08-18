const initialState = {
    cut: null,
    copy: null,
    data: [
    {
      id: 0,
      parent: null,
      attributes: [{
        name: "Флора и фауна"
      }]
    },
  
    {
      id: 1,
      parent: 0,
      attributes: [{
        name: "Рыбы"
      }]
    },
    {
      id: 2,
      parent: 1,
      attributes: [{
        name: "форель"
      }]
    },
    { 
      id: 3,
      parent: 1,
      attributes: [{
        name: "лосось"
      }]
    },
    {
      id: 4,
      parent: 0,
      attributes: [{
      name: "Деревья"
      }]
    },
    {
      id: 5,
      parent: 4,
      attributes: [{
      name: "Огромные"
      }]
    },
    {
      id: 6,
      parent: 5,
      attributes: [{
      name: "секвойя"
      }]
    }, 
    {
      id: 7,
      parent: 5,
      attributes: [{
      name: "дуб"
      }]
    }, 
    {
      id: 8,
      parent: 4,
      attributes: [{
      name: "Цветковые"
      }]
    },  
    {
      id: 9,
      parent: 8,
      attributes: [{
      name: "яблоня"
      }]
    }, 
    {
      id: 10,
      parent: 8,
      attributes: [ 
        {
          name: "груша"
        }
    ]
    },
    ]   
  }

const delEl = (id, data) => {
  let newData;
  let childs = data.filter(el => el.parent === id);
  newData = data.filter(el => el.id !== id);
  childs.forEach(el => {
    newData = delEl(el.id, newData)
  })
  return newData
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NODE": 
        const node = {
            id: action.payload.id,
            parent: action.payload.parentId,
            attributes: [
              {
                name: 'New node ',
              }   
            ],
        }
        
        const newData = [
            ...state.data,
            node
        ]
        return {
             ...state,
             data: newData
        }
        case "DELETE_NODE": 
        return {
          ...state,
          data: delEl(action.payload, [...state.data])
        }
        case "CUT_NODE": 
        return {
          ...state,
          cut: action.payload
        }
        case "COPY_NODE": 
        return {
          ...state,
          copy: action.payload
        }
        case "PASTE_NODE":
          let cutNode = [...state.data].filter(el => el.id === state.cut)[0];
          let copyNode = [...state.data].filter(el => el.id === state.copy)[0];
          let pasteNode;
          if (state.cut) {
            pasteNode = {
              ...cutNode,
              parent: action.payload
            }
          } else {
            pasteNode = {
              ...copyNode,
              parent: action.payload
            }
          }
          let transformData = [...state.data].filter(el => el.id !== state.cut);
          if (state.cut) {
          transformData = [
            ...transformData,
            pasteNode
          ]} else {
            transformData = [
              ...state.data,
              pasteNode
            ]
          }
        return {
            ...state,
            data: transformData
        }
        case "CREATE_ATTRIBUTE": 
          let elem = [...state.data].filter(el => el.id === action.payload.id)[0];
          let datas = [...state.data].filter(el => el.id !== action.payload.id);
          elem = {
              ...elem, 
              attributes: [
                ...elem.attributes,
                {
                  [action.payload.name]: action.payload.value
                }  
              ],
          }
          return {
            ...state,
            data: [
              ...datas,
              elem
            ]
          }
          case "CREATE_ROOT":
          return {
            ...state,
            data: [
                {
                  id: 0,
                  parent: null,
                  attributes: [
                    {
                      name: "Root element"
                    }
                  ]
                }
            ]
          }
          case "DELETE_ATTRIBUTE":
            let el = [...state.data].filter(el => el.id === action.payload.id)[0];
            let attr = el.attributes.filter(element => Object.keys(element)[0] !== action.payload.key);
            el = {
              ...el,
              attributes: attr
            }
            let dataElem = [...state.data].filter(el => el.id !== action.payload.id);
          return {
              ...state,
              data: [
                ...dataElem,
                el
              ]
          }
          case "EDIT_ATTRIBUTES": 
            let editEl = [...state.data].filter(el => el.id === action.payload.id)[0];
            let idx = state.data.findIndex(el => el === editEl);
            editEl = {
              ...editEl,
              attributes: action.payload.attributes
            }
           
          return {
              ...state.slice,
              data: [
                ...state.data.slice(0, idx),
                editEl,
                ...state.data.slice(idx + 1)
              ]
            }

        default:
            return state;
            
    }
}

export default reducer;