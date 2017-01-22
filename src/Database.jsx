import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class Database extends Component {
  constructor () {
  	super ();
  	this.state = {
  		speed: 20
  	};
  }

  componentDidMount () {
  	const rootRef = firebase.database().ref();
  	const speedRef = rootRef.child('speed');
  	speedRef.on('value', snap => {
      this.setState({
  		speed: snap.val()
  	  });
  	});
  }

  render () {
  	return (
      <div className="App">
        <h1>{this.state.speed}</h1>
      </div>
  	)
  }
}

module.exports = Database
