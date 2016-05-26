import React from 'react';
import binaryTree from './d3BinaryTree';
import rd3 from 'react-d3-library';

var Rd3Component = rd3.Component;

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  createTree: function() {
    var binary = binaryTree();
    this.setState({d3: binary});
  },

  highlight: function(e) {
    e.target.style.background = 'white';
    e.target.style.color = 'black';
  },

  deHighlight: function(e) {
    e.target.style.background = 'black';
    e.target.style.color = 'white';
  },

  render: function() {
    const styleMakeTree = {
      background: "black",
      padding: 10,
      marginTop: 700,
      marginRight: 5,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "1.5em",
    };

    const divStyles = {
      marginRight: 360
    }
    return (
      <div id="rd3-demo">
        <Rd3Component data={this.state.d3}/>
        <div style={divStyles}>
          <button style={styleMakeTree} type='button' onClick={this.createTree} onMouseDown={this.highlight} onMouseUp={this.deHighlight}>Binary Tree</button>
        </div>
      </div>
    )
  }
});
