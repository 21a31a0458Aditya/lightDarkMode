import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const buttonText = isLightMode ? 'Light Mode' : 'Dark Mode'
    const isClassName = isLightMode ? 'LightClass' : 'DarkClass'

    return (
      <div className="app-container">
        <div className={`container ${isClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
