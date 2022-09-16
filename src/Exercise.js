import React, { Component } from 'react';

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let rand = Math.floor(Math.random() * 10);
    this.setState({ num: rand });
  }
  render() {
    let body;
    if (this.state.num === 7) {
      body = <h3>You win</h3>;
    } else {
      body = <button onClick={this.handleClick}>Click me</button>;
    }
    return (
      <div>
        <h1>Number: {this.state.num}</h1>
        {body}
      </div>
    )
  }
}

export default Exercise;