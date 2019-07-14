import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'
import imoocForm from '../../component/imooc-form/imooc-form'

//属性代理
// function WrapperHello(Comp){
// 	class WrapComp extends React.Component{
// 		render(){
// 			return (
// 				<div>
// 					<p>这是HOC高阶组件中特有的元素</p>
// 					<Comp {...this.props}></Comp>
// 				</div>
// 			)
// 		}
// 	}
// 	return WrapComp
// }

//反向集成
// function WrapperHello(Comp){
// 	class WrapComp extends Comp{
// 		componentDidMount(){
// 			console.log("高阶组件新增的生命周期，加载完成")
// 		}
// 		render(){
// 			return (
// 				<div>
// 					<Comp {...this.props}></Comp>
// 				</div>
// 			)
// 		}
// 	}
// 	return WrapComp
// }

// @WrapperHello
// class Hello extends React.Component{
// 	render(){
// 		return <div>hello imooc I love React and Redux</div>
// 	}
// }

@connect(
	state => state.user,
	{ login }
)
@imoocForm
class Login extends React.Component{
	constructor(props){
		super(props)
		this.handleLogin = this.handleLogin.bind(this)
		this.register = this.register.bind(this)
	}
	register(){
		this.props.history.push("/register")
	}
	handleLogin(){
		this.props.login(this.props.state)
	}
	render(){
		return (
			<div>
				{this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to = {this.props.redirectTo} /> : null}
				<Logo></Logo>
				<WingBlank>
					<List>
						{this.props.msg ? <p className = 'error-msg'>{this.props.msg}</p> : null}
						<InputItem
							onChange = {v => this.props.handleChange('user', v)}
							>用户：</InputItem>
						<WhiteSpace />
						<InputItem
							onChange = {v => this.props.handleChange('pwd', v)}
							type = 'password'
							>密码：</InputItem>
					</List>
					<Button onClick = {this.handleLogin} type = 'primary'>登录</Button>
					<WhiteSpace />
					<Button onClick = {this.register} type = 'primary'>注册</Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login