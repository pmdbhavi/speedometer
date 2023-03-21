import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelerate = () => {
    this.setState(
      prevState => prevState.speed < 200 && {speed: prevState.speed + 10},
    )
  }

  onClickBrake = () => {
    this.setState(
      prevState => prevState.speed > 0 && {speed: prevState.speed - 10},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="para">Speed is {speed}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="con">
          <button
            type="button"
            className="button1"
            onClick={this.onClickAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.onClickBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
