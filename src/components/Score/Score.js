import React, { PropTypes, Component } from 'react';
import Players from '../Players';
import Controls from '../Controls';

var Score = React.createClass({
  render: function() {
    return (
      <div id='score'>
        <h1>Score</h1>
        <Players/>
        <Controls/>
      </div>
    );
  }
});

module.exports = Score;
