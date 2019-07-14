import React from 'react'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import PropTypes from 'prop-types'

class UserCard extends React.Component{
	static propTypes = {
		userlist: PropTypes.array.isRequired
	}
	handleClick(v){
		console.log("test")
		console.log(v)
		this.props.history.push(`/chat/${v.user}`)
	}
	render(){
		return (
			<WingBlank>
				<WhiteSpace />
				{this.props.userlist.map(v => (
					v.avatar ? 
					<div
						style = {{zIndex: 9999}}
						onClick = {() => this.handleClick}
					>
						<Card key = {v._id}>
							<Card.Header
								title = {v.user}
								// thumb = {require(`../img/${v.avatar}.png`)}
								extra = {<span>{v.title}</span>}
							/>
							<Card.Body>
								{v.type === 'boss' ? <div>公司：{v.company}</div> : null}
								{v.desc.split('\n').map(d => (
									<div key = {d}>{d}</div>
								))}
								{v.type === 'boss' ? <div>薪资：{v.money}</div> : null}
							</Card.Body>
						</Card>
					</div>
					 : null
				))}
			</WingBlank>
		)
	}
}

export default UserCard