import React, { Component } from 'react'
import * as firebase from 'firebase';

class Bets extends React.Component {

  constructor(props, context){
    super(props, context)
    this.recordPlayer = this.recordPlayer.bind(this)
    this.recordWager = this.recordWager.bind(this)
    this.recordBet = this.recordBet.bind(this)
    this.state = {
      playerName: '',
      playerWager: '',
      activeBool: false
    }
  }

  /*componentDidMount(){
    firebase.database().ref('currentBets/').on('value', (snapshot)=>{
      const currentBets = snapshot.val()

      if (activeBool === true){
        this.setstate({
          playerName: '',
          playerWager: ''
        })
      }
    })
  }*/

  recordPlayer(event) {
    this.setState({
      playerName: event.target.value
    })
  }  

  recordWager(event) {
    this.setState({
      playerWager: event.target.value
    })
  }

  recordBet(event) {
    if (this.state.playerName.length > 0 && this.state.playerWager.length > 0) {
      this.setState({
        activeBool: true
      })
      console.log('this should say true' + this.state.activeBool)
    } else { console.log ('this shoudl say false' + this.state.activeBool) }
  }

  render () {
    return (
      <div className='bets'>
        <input value={this.state.playerName} className='search-input' type='text' placeholder='Player' onChange={this.recordPlayer} />
        <input value={this.state.playerWager} className='search-input' type='text' placeholder='Wager' onChange={this.recordWager} />
          <h3>Player: {this.state.playerName}</h3>
          <h3>$ {this.state.playerWager} Wagered</h3>
          <button onClick={this.recordBet} className="button">Record Bet</button>
      </div>
    )
  }

}
  

module.exports = Bets