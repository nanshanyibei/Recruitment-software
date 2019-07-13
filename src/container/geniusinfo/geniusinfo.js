import React from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelector from './../../component/avatar-selector/avatar-selector'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../redux/user.redux'

@connect(
	state => {
		console.log('在geniusinfo页面时的state',state.user)
		return state.user
	},
	{ update }
)

class GeniusInfo extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			title: '',
			desc: ''
		}
		this.handleClick = this.handleClick.bind(this)
	}
	onChange(key, val){
		this.setState({
			[key]: val
		})
	}
	handleClick(){
		this.props.update(this.state)
	}
	render(){
		const path = this.props.location.pathname
		const redirect = this.props.redirectTo
		return (
			<div>
				{redirect && redirect !== path ? <Redirect to = {this.props.redirectTo}></Redirect> : null}
				<NavBar mode = 'dark'>牛人完善信息页面</NavBar>
				<AvatarSelector
					selectAvatar = {(imgname) => {
						console.log(imgname)
						this.setState({
							avatar: imgname
						})
					}}
					/>
				<InputItem onChange = {v => this.onChange('title', v)}>
					求职岗位
				</InputItem>
				<TextareaItem
					onChange = {v => this.onChange('desc', v)}
					rows = {3}
					autoHeight
					title = '个人简介'
					>
				</TextareaItem>
				<Button
					onClick = {this.handleClick}
					type = 'primary'>保存</Button>
			</div>
		)
	}
}

export default GeniusInfo