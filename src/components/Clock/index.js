import {Component} from 'react'
import './index.css'

class Clock extends Component {
  //    Older Approach
  //   constructor(props) {
  //     super(props)
  //     this.state = {date: new Date()}
  //     console.log('Constructor called')
  //   }

  //    Modern Approach
  state = {date: new Date()}

  componentDidMount() {
    console.log('componentDidMount called')
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount Called')
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log(`render called ${date}`)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
