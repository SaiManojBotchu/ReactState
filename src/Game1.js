import React, { Component } from 'react';

class Game1 extends Component {
  state = {
    score: 0,
    gameOver: false
  }
  render() {
    return (
      <div>
        <h1>Your score is: {this.state.score}</h1>
      </div>
    );
  }
}

export default Game1;