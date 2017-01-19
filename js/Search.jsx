const React = require('react')
const data = require('../public/data')

const Search = () => (
  <div className='container'>
    {data.data.map((data) => (
      <div className='show-card'>
      <img src={`public/images/${data.HomeROT}`} className='show-card-img' />
      <img src={`public/images/${data.AwayROT}`} className='show-card-img2' /> 
        <div className='show-card-text'>
          <h3>{data.HomeTeam} vs {data.AwayTeam}</h3>
          <h3>Date: {data.MatchTime}</h3>
          <h3>Odds: {data.Odds}</h3>
        </div> 
      </div>
    ))}
  </div>
)

module.exports = Search
