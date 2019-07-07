import React from 'react'
import { connect } from 'react-redux'
import { addGUN, removeGUN, addGunAsync} from './index.redux'

@connect(
	//要state什么属性放到props里
	state => ({ num: state }),
	//要用什么方法，放到props，自动dispatch
	{ addGUN, removeGUN, addGunAsync }
)

class App extends React.Component{
	render(){
		return <div>
			<h1>现在有{this.props.num}</h1>
			<button onClick = {this.props.addGUN}>再多一个</button>
			<button onClick = {this.props.removeGUN}>少一个</button>
			<button onClick = {this.props.addGunAsync}>拖两天再给</button>
		</div>
	}
}

export default App