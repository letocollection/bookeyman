const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='home-info'>
    <h1 className='title'>The Bookeyman App</h1>
    <h5 className='title'>Where Anyone Can Be a Bookey</h5>
    <input className='search' type='text' placeholder='Search' />
    <Link to='/search' className='browse-all'> or Browse All</Link>
    <h1> Leonard is making this shit </h1>
  </div>
)

module.exports = Landing
