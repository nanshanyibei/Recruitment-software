import React from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

@withRouter
class NavLinkBar extends React.Component{
	static propTypes = {
		data: PropTypes.array.isRequired
	}
	render(){
		const navList = this.props.data.filter(v => !v.hide)
		const { pathname } = this.props.location
		return (
			<TabBar>
				{navList.map(v => (
					<TabBar.Item
						key = {v.path}
						title = {v.text}
						icon = {{uri: require(`./image/${v.icon}.jpg`)}}
						selectedIcon = {{uri: require(`./image/${v.icon}-selected.jpg`)}}
						selected = {pathname === v.path}
						onPress = {() => {
							this.props.history.push(v.path)
						}}
					/>
				))}
			</TabBar>
		)
	}
}

export default NavLinkBar