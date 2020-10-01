import React, { Component } from 'react';

class ClassCounter extends Component {
  state = { value: 0 };

  render() {
    return (
      <div>
        <h2>Class Counter</h2>
        {this.state.value}
      </div>
    );
  }
}

export default ClassCounter;
