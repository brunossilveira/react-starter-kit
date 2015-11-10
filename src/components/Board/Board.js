import React, { PropTypes, Component } from 'react';
import Score from '../Score';
import History from'../History';

var Board = React.createClass({
  getInitialState: function() {
    return{ players: [] }
  },

  componentDidMount: function() {
    socket.on('init', this._initialize);
  },

  _initialize: function(data) {
    console.log('init');
    console.log(data);
    //this.setState( { players, player: name } );
  },

  render: function() {
    return (
      <div id='board'>
        <Score players={this.state.players}/>
        <hr/>
        <History/>
      </div>
    );
  }
});

module.exports = Board;
