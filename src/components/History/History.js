import React, { PropTypes, Component } from 'react';

var History = React.createClass({
  render: function(){
    return (
      <div id='log'>
        <h1>History</h1>
        <ul id='history'></ul>
      </div>
    );
  }
});

module.exports = History;
