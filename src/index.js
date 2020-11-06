import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import {Provider} from 'react-redux' 
import {createStore,applyMiddleware} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'; //处理异步的中间件，（和applyMiddleware一起使用）
import {counder} from './counder'

const store = createStore(counder,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);
