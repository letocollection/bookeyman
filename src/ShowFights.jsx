const React = require('react')
const RecordBets = require('./RecordBets')

const ShowFights = (props) => (
	<div className='show-card'>
        <img src={`images/${props.data.HomeROT}`} className='show-card-img' />
        <img src={`images/${props.data.AwayROT}`} className='show-card-img2' />
        <div className='show-card-text'>
            <h3>{props.data.HomeTeam} vs {props.data.AwayTeam}</h3>
            <h3>Date: {props.data.MatchTime}</h3>
            <h3>Odds: {props.data.Odds}</h3>  
         </div>
         <RecordBets />
    </div>
)

module.exports = ShowFights