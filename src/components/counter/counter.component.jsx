import React from "react";

class Counter extends React.Component {
  constructor() {
     super();
     this.state = {
      count: 0
     }
  }

  render() {
    return (
      <div>
        <button>Mount</button>
        <button>Unmount</button>
        <div>
          The current count is {this.state.count}
        </div>

        <button>Increment</button>
        <button>Decrement</button>
      </div>
    );
  }
}