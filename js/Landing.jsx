const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>UFC Betting Odds</h1>
      <Link to='/search' className='browse-all'>Record Bets</Link>
    </div>
  </div>
)

module.exports = Landing
