import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={() => alert('Clicked!!') }>
          Click me
        </button>
      </div>
    );
  }
}

export default Button;