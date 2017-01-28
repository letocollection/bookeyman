const React = require('react')
const ShowFights = require('./ShowFights')
const fights = require('../public/data')

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
        {fights.data
          .filter((data) => `${data.HomeTeam} ${data.AwayTeam}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map((data) => (
            <ShowFights data={data} />
        ))}
      </div>
    )
  }
})

module.exports = Search
