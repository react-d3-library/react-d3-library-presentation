import React from 'react';

module.exports = React.createClass({

  createTree: function() {
    var branches = [];
    var seed = {i: 0, x: 420, y: 600, a: 0, l: 130, d:0}; // a = angle, l = length, d = depth
    var da = 0.5; // Angle delta
    var dl = 0.75; // Length delta (factor)
    var ar = 0.9; // Randomness
    var maxDepth = 6;


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

    branch(seed);

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
      var colour = d3.event.type === 'mouseover' ? 'green' : 'white';
      var depth = d.d;
      for(var i = 0; i <= depth; i++) {
        d3.select('#id-'+parseInt(d.i)).style('stroke', colour);
        d = branches[d.parent];
      }
    }

    d3.select('body')
      .append('svg')
      .attr("width", 800)
      .attr("height", 650)
      .attr('class', 'svg-tree')
      .style('margin-left', 540)
      .style('margin-top', 150)
      .selectAll('line')
      .data(branches)
      .enter()
      .append('line')
      .attr('stroke', '#af111c')
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x2)
      .attr('y2', y2)
      .style('stroke-width', function(d) {return parseInt(maxDepth + 1 - d.d) + 'px';})
      .attr('id', function(d) {return 'id-'+d.i;})
  },

  highlight: function(e) {
    e.target.style.background = 'white';
    e.target.style.color = 'black';
  },

  deHighlight: function(e) {
    e.target.style.background = 'black';
    e.target.style.color = 'white';
  },

  deleteTree: function() {
    d3.selectAll('.svg-tree').remove();
  },

  render: function() {
    const styleMakeTree = {
      background: "black",
      padding: 10,
      marginTop: 550,
      marginRight: 5,
      marginBottom: 80,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "1.5em",
    };

    return (
      <div >
        <button style={styleMakeTree} type='button' onClick={this.createTree} onMouseDown={this.highlight} onMouseUp={this.deHighlight}>Make Tree</button>
        <button style={styleMakeTree} type='button' onClick={this.deleteTree} onMouseDown={this.highlight} onMouseUp={this.deHighlight}>Clear Tree</button>
      </div>
    )
  }
});
