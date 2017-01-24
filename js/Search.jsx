const React = require('react')
const Bets = require('./Bets')
const data = require('../public/data')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>Current UFC Betting Lines</h1>
          <h2 className='brand'>Bookeyman</h2>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
        </header>
        {data.data
          .filter((data) => `${data.HomeTeam} ${data.AwayTeam}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map((data) => (
            <div className='show-card'>
              <img src={`public/images/${data.HomeROT}`} className='show-card-img' />
              <img src={`public/images/${data.AwayROT}`} className='show-card-img2' />
              <div className='show-card-text'>
                <h3>{data.HomeTeam} vs {data.AwayTeam}</h3>
                <h3>Date: {data.MatchTime}</h3>
                <h3>Odds: {data.Odds}</h3>
              </div>
              <Bets />
            </div>
        ))}
      </div>
    )
  }
})

module.exports = Search
