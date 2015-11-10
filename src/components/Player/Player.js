import React, { PropTypes, Component } from 'react';

var Player = React.createClass({
  handleChange: function(e) {
    this.setState({
      life: 40
    });
  },
  render: function(){
    return (
      <li className={'player' + this.props.color}>
        <div className='mdl-card mdl-shadow--4dp'>
          <div className='life mdl-card__title mdl-card--expand'>{this.props.life}</div>
          <div className='name mdl-card__actions mdl-card--border'>{this.props.name}</div>
        </div>
      </li>
    );
  }
});

module.exports = Player;
