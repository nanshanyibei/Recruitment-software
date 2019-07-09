import React from 'react'
import { connect } from 'react-redux'
import { login, getUserData } from './Auth.redux'
import { Redirect } from 'react-router-dom'

class Auth extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
	}
	componentDidMount(){
		this.props.getUserData()
	}
	render(){
		return (
			<div>
				<h2>我的名字是{this.props.user}，年龄是{this.props.age}</h2>
				{ this.props.isAuth ? <Redirect to = '/dashboard' /> : null }
				<h2>你没有权限，登录后才能查看</h2>
				<button onClick = {this.props.login}>登录</button>
			</div>
		)
	}
}

Auth = connect(state => state.auth, {login, getUserData})(Auth)

export default Auth