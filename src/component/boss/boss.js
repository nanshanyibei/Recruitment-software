import React from 'react'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard';

@connect(
	state => state.chatuser,
	{ getUserList }
)
class Boss extends React.Component{
	componentDidMount(){
		this.props.getUserList('genius')
	}
	shouldComponentUpdate(state){
		if(state.userlist.length){
			return true
		}
	}
	render(){
		return (
			<UserCard userlist = {this.props.userlist}/>
		)
	}
}

export default Boss