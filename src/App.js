import React from 'react';
// import Potato from './Potato'; // 경로에서 >>>>> ./ <<<<< 는 같은 directory를 의미
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "We are ready"}    
      </div>
      )
  }
}

export default App;
