import React from 'react';
import './app.css';
import InterfaceTree from './components/interface-tree/interface-tree';
import InterfaceJson from './components/interface-json/interface-json';
import { connect } from 'react-redux';
import { addNode, deleteNode, cutNode, pasteNode, editAttributes,
  copyNode, createAttribute, createRootElem, deleteAttribute } from './redux/actions';

function App(props) {
  
  return (
    <div className="app">
     <InterfaceTree {...props}/>
     <InterfaceJson {...props}/>
    </div>
    )
}

const mapStateToProps = ({ data, cut, copy }) => {
  return { data, cut, copy }
}
const mapDispatchToProps = {
  addNode,
  deleteNode,
  cutNode,
  pasteNode,
  copyNode,
  createAttribute,
  createRootElem,
  deleteAttribute,
  editAttributes 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
