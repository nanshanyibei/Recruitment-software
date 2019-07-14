import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Button, Modal } from 'antd-mobile'
import browserCookie from 'browser-cookies'

@connect(
	state => state.user
)
class User extends React.Component{
	constructor(props){
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout(){
		const alert = Modal.alert
		alert('注销', '确认退出登录嘛？？？',[
			{ text: '取消', onPress: () => console.log('cancel')},
			{ text: '确认', onPress: () => {
				browserCookie.erase('userid')
				window.location.href = window.location.href
			}}
		])
		// browserCookie.erase('userid')
	}
	render(){
		const props = this.props
		return props.user ? (
			<div>
				<Result
					img = {<img src = {require(`../img/${props.avatar}.png`)} style = {{width: 50}} />}
					title = {props.user}
					message = {props.type === 'boss' ? props.company : null}
					/>
				<List renderHeader = {() => '简介'}>
					<List.Item>
						{props.title}
						{props.desc.split('\n').map(v => <List.Item.Brief key = {v}>{v}</List.Item.Brief>)}
						{props.money ? <List.Item.Brief>薪资： {props.money}</List.Item.Brief> : null}
					</List.Item>
				</List>
				<WhiteSpace/>
				<List>
					<List.Item onClick = {this.logout}>退出登陆</List.Item>
				</List>
			</div>
		) : null
	}
}

export default User