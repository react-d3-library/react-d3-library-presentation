import React from 'react';
import binaryTree from './d3BinaryTree';
import mergeSort from './d3MergeSort';
import radialTree from './d3RadialTree';
import rd3 from 'react-d3-library';

var Rd3Component = rd3.Component;

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: '', createMe: false}
  },

  createTree: function() {
    var binary = binaryTree();
    this.setState({d3: binary});
  },

  createRadialTree: function() {
    var radial = radialTree();
    this.setState({d3: radial});
  },

  createMergeSort: function() {
    var merge = mergeSort();
    this.setState({d3: merge});
  },

  regenerate: function() {
    var div = document.createElement('div');
    var branches = [];
    var seed = {i: 0, x: 420, y: 600, a: 0, l: 130, d:0}; // a = angle, l = length, d = depth
    var da = 0.5; // Angle delta
    var dl = 0.8; // Length delta (factor)
    var ar = 0.7; // Randomness
    var maxDepth = 7;
    var node = this.state.d3;
    toRegenerate(this.state.createMe);


    // Tree creation functions
    function branch(b) {
      var end = endPt(b), daR, newB;

      branches.push(b);

      if (b.d === maxDepth)
        return;

      // Left branch
      daR = ar * Math.random() - ar * 0.5;
      newB = {
        i: branches.length,
        x: end.x,
        y: end.y,
        a: b.a - da + daR,
        l: b.l * dl,
        d: b.d + 1,
        parent: b.i
      };
      branch(newB);

      // Right branch
      daR = ar * Math.random() - ar * 0.5;
      newB = {
        i: branches.length,
        x: end.x, 
        y: end.y, 
        a: b.a + da + daR, 
        l: b.l * dl, 
        d: b.d + 1,
        parent: b.i
      };
      branch(newB);
    }

    function toRegenerate(doIt) {
      if (doIt === false) {
        branches = [];
        branch(seed);
        create();

      } else {
        branches = [];
        branch(seed);
        update(node);  
      }
    }

    function endPt(b) {
      // Return endpoint of branch
      var x = b.x + b.l * Math.sin( b.a );
      var y = b.y - b.l * Math.cos( b.a );
      return {x: x, y: y};
    }


    // D3 functions
    function x1(d) {return d.x;}
    function y1(d) {return d.y;}
    function x2(d) {return endPt(d).x;}
    function y2(d) {return endPt(d).y;}
    function highlightParents(d) {
      var colour = d3.event.type === 'mouseover' ? 'green' : '#777';
      var depth = d.d;
      for(var i = 0; i <= depth; i++) {
        d3.select('#id-'+parseInt(d.i)).style('stroke', colour);
        d = branches[d.parent];
      } 
    }

    function create() {
      d3.select(div)
        .append('svg')
        .attr("width", 800)
        .attr("height", 700)
        .style('margin-left', 60)
        .style('margin-top', 10)
        .selectAll('line')
        .data(branches)
        .enter()
        .append('line')
        .attr('stroke', 'white')
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2)
        .style('stroke-width', function(d) {return parseInt(maxDepth + 1 - d.d) + 'px';})
        .attr('id', function(d) {return 'id-'+d.i;});
    }

    function update(newNode) {
      console.log(newNode);
      d3.select(newNode)
        .selectAll('line')
        .data(branches)
        .transition()
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2);
    }
    if (this.state.createMe === true) {
      this.setState({d3: node});
    } else {
      this.setState({d3: div, createMe: true});
    }
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
          <button style={styleMakeTree} type='button' onClick={this.regenerate} onMouseDown={this.highlight} onMouseUp={this.deHighlight}>Regenerate</button>
          <button style={styleMakeTree} type='button' onClick={this.createRadialTree} onMouseDown={this.highlight} onMouseUp={this.deHighlight}>Radial Tree</button>
          <button style={styleMakeTree} type='button' onClick={this.createMergeSort} onMouseDown={this.highlight} onMouseUp={this.deHighlight}>Merge Sort</button>
        </div>
      </div>
    )
  }
});
