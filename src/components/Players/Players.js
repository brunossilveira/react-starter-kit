import React, { PropTypes, Component } from 'react';
import Player from '../Player';

var Players = React.createClass({
  getInitialState: function() {
    return {
      players: []
    };
  },
  render: function() {
    var players = this.state.players.map(function(player) {
      return <Player name={player.name} life={player.life} color={player.color}></Player>;
    });
    return (
      <ul id='players'>{players}</ul>
    );
  }
});

module.exports = Players;
