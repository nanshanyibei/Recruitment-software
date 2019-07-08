import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Redirect } from 'react-router-dom'

class Auth extends React.Component{
	render(){
		return (
			<div>
				{ this.props.isAuth ? <Redirect to = '/dashboard' /> : null }
				<h2>你没有权限，登录后才能查看</h2>
				<button onClick = {this.props.login}>登录</button>
			</div>
		)
	}
}

Auth = connect(state => state.auth, {login})(Auth)

export default Auth