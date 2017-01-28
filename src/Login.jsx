const React = require('react')
const { Link } = require('react-router')

class Login extends React.Component {
	render() {
		return (
			<div>
				<input type='text' className='search-input' placeholder='username' />
				<input type='text' className='search-input' placeholder='password' />
				<button className='button'>Login</button>
				<button className='button'>Forgot Your Password?</button>
			</div>
		)
	}
}

module.exports = Login