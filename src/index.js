import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Potato from './Potato';

ReactDOM.render(<App />, document.getElementById('root'));
// <App /> : 컴포넌트component  -  HTML 반환하는 함수(App.js보면)
// App 이 아니라 <App /> 처럼 쓰는 걸 JSX 라고 함. react 특화 기능.

// ReactDOM.render(<App /><Potato />, document.getElementById('root'));
// 위 처럼 여러 component는 X !!  --- react application은 하나의 component만을 rendering. 여기선 그게 App

