import React, { PropTypes, Component } from 'react';

var Controls = React.createClass({
  getInitialState: function() {
    return { life: 0 }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var life = this.state.life;
    this.props.onLifeSubmit(life);
    this.setState({ life: 0 });
  },
  changeHandler: function(e) {
    this.setState({ life: e.target.value });
  },
  render: function(){
    return (
      <div id='controls'>
        <form action='' onSubmit={this.handleSubmit}>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="life-input" onChange={this.changeHandler} value={this.state.life} />
            <label className="mdl-textfield__label" htmlFor="life-input">Life...</label>
            <span className="mdl-textfield__error">Input is not a number!</span>
          </div>
          <button className='mdl-button mdl-js-button mdl-button--primary'>
            Enviar
          </button>
        </form>
      </div>
    );
  }
});

module.exports = Controls;
