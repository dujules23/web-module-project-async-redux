import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import logger from "redux-logger"

import Title from './components/Title'
import Monster from './components/Monster'
import  { titleReducer } from './reducers/titleReducer'


// Step 1: Create store
const store = createStore(titleReducer, applyMiddleware(logger))

function App() {
  return (
    <div className="App">
      <Title />
      <Monster />
    </div>
  );
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
