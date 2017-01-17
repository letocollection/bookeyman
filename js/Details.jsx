const React = require('react')
const Header = require('./Header')

class Details extends React.Component {
  render () {
  	const params = this.props.params || {}
  	const { title, description, year, poster, trailer } = params/*dont necessarily need to write it like this*/
    return (
	  <div className='container'>
	    <Header />
	    <div className='video-info'>
	      <h1 className='video-title'>{title}</h1>
	      <h2 className='video-year'>({year})</h2>
	      <img className='video-poster' src={`public/img/posters/${poster}`} />
	      <p className='video-description'>{description}</p>
	    </div>
	  </div>
	)  
  }
}

const { object } = React.PropTypes

Details.propTypes= {
  params: object
}

module.exports = Details
