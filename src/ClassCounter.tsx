import React, { Component } from 'react'

class ClassCounter extends Component {
  state = { value: 0 }

  handleClick = () => {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    return (
      <div>
        <h2>Class Counter</h2>
        <button onClick={this.handleClick}>Click me! {this.state.value}</button>
      </div>
    )
  }
}

export default ClassCounter
