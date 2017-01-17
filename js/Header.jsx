const React = require('react')
const { Link } = require('react-router')

const Header = React.createClass({
  render () {
  	let utilSpace
  	if (this.props.showSearch) {
  		utilSpace = <input type='text' className='search-input' placeholer='search' value={this.props.searchTerm} onChange={this.props.handleSearchTerm} />
  	} else {
  	  utilSpace = (
        <h2 className='header-back'>
		  <Link to='/search'>
			Back
		  </Link>
	    </h2>	
  	  )
  	}
    return (
      <header className='header'>
        <h1 className='brand'>
		  <Link to='/' className='brand-link'>
			Bookeyman
		  </Link>
		</h1>
		{utilSpace}
	  </header>
	)
  }
})

module.exports = Header