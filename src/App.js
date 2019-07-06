import React from 'react'
import {Button} from 'antd-mobile'

class App extends React.Component{
  render(){
    const boss = '李云东'
    return <div>
      <h2>独立团，团长：{boss}</h2>
      <FristCamp campBoss = '张大喵' />
      <Cavalry CavalryBoss = '孙德胜' />
    </div>
  }
}

function Cavalry(props) {
  return <h2>骑兵连连长，{props.CavalryBoss}，冲啊</h2>
}

class FristCamp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      solders: ['虎子','柱子','王根生']
    }
    console.log("组件初始化")
  }
  addSolder = () => {
    this.setState({
      solders: [...this.state.solders,'新兵蛋子'+Math.random()]
    })
  }
  render(){
    return <div>
      <h2>一营营长：{this.props.campBoss}</h2>
      <Button type='primary' onClick={this.addSolder}>新兵入伍</Button>
      <ul>
        {this.state.solders.map(v => {
          return <li key={v}>{v}</li>
        })}
      </ul>
    </div>
  }
}

export default App