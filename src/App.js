import React from 'react'

class App extends React.Component{
  // constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		test: "1234"
	// 	}
	// }
	render(){
		const store = this.props.store
		const num = store.getState()
		const addGUN = this.props.addGUN
		const removeGUN = this.props.removeGUN
		return <div>
			<h1>现在有{num}</h1>
			<button onClick = {() => store.dispatch(addGUN())}>再多一个</button>
			<button onClick = {() => store.dispatch(removeGUN())}>少一个</button>
		</div>
	}
}

export default App