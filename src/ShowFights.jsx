const React = require('react')

const ShowFights = () => {
{data.data
          .filter((data) => `${data.HomeTeam} ${data.AwayTeam}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map((data) => (
            <div className='show-card'>
              <img src={`images/${data.HomeROT}`} className='show-card-img' />
              <img src={`images/${data.AwayROT}`} className='show-card-img2' />
              <div className='show-card-text'>
                <h3>{data.HomeTeam} vs {data.AwayTeam}</h3>
                <h3>Date: {data.MatchTime}</h3>
                <h3>Odds: {data.Odds}</h3>
              </div>
              <RecordBets />
            </div>
        ))}
}          

module.exports = ShowFights
