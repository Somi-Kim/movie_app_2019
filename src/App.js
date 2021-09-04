import React from 'react';
// import Potato from './Potato'; // 경로에서 >>>>> ./ <<<<< 는 같은 directory를 의미
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };;
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("i just updated");
  }
  componentWillUnmount() {alert("bye")}
  render() {
    console.log("im rendering")
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
      )
  }
}

export default App;
