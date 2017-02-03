import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './reducers/todos';
import { addTodo } from './actions';

const __REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__;
// then we create a store, and we fold in our devtools, but only if it exists for our browser
const store = createStore(todos, __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(addTodo('oh hai'));
store.dispatch(addTodo('wheeeee'));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
