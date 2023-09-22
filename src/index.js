import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './redux/reducers';
import App from './App';

// Create the Redux store with the rootReducer and apply middleware (thunk)
const store = createStore( applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  
);