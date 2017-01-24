import React, { Component } from 'react'
import * as firebase from 'firebase';

class RecordBets extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.recordPlayer = this.recordPlayer.bind(this)
		this.recordWager = this.recordWager.bind(this)
		this.confirmBet = this.confirmBet.bind(this)
			this.state = {
				confirmedPlayer: '',
				confirmedWager: '',
				confirmedBets: []
			}
		
	}


	componentDidMount(){
		firebase.database().ref('confirmedBets/').on('value', (snapshot)=>{
			
			const activeBets = snapshot.val()

			if(activeBets != null){
				this.setState({
					confirmedBets: activeBets
				})
			}
		})
	}

	recordPlayer(event){
		this.setState({ confirmedPlayer: event.target.value })
	}

	recordWager(event){
		this.setState({ confirmedWager: event.target.value })
	}

	confirmBet(event){
		const nextBet = {
			id: this.state.confirmedBets.length,
			playerName: this.state.confirmedPlayer,
			wager: this.state.confirmedWager
		}

		firebase.database().ref('confirmedBets/' + nextBet.id).set(nextBet)
	}

	render(){
		const shownBets = this.state.confirmedBets.map((bet, i) => {
			return (
				<h4 key={bet.id}>{bet.playerName} ${bet.wager}</h4>
			)
		})
		return(
			<div className='show-card-text'>
        		<input onChange={this.recordPlayer} className='search-input' type='text' placeholder='Player' />
        		<input onChange={this.recordWager} className='search-input' type='text' placeholder='Wager'  />
          		<button onClick={this.confirmBet}>Record Bet!</button>
          		<ol>
          			<h3 className='show-card-text'>{shownBets}</h3>	
          		</ol>
      		</div>
		)	
	}

}

module.exports = RecordBets