const React = require('react')

const Bets = React.createClass({
  getInitialState () {
    return {
      player: '',
      money: ''
    }
  },
  handlePlayer (P) {
    this.setState({ player: P.target.value })
  },
  wagerMoney (M) {
    this.setState({ money: M.target.value })
  },
  render () {
    return (
      <div className='bets'>
        <input value={this.state.player} className='search-input' type='text' placeholder='Player' onChange={this.handlePlayer} />
        <input value={this.state.money} className='search-input' type='text' placeholder='Wager' onChange={this.wagerMoney} />
          <h3>Player: {this.state.player}</h3>
          <h3>$ {this.state.money} Wagered</h3>
      </div>
    )
  }
})

module.exports = Bets