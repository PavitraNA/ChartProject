import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main.js';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom'
import rootReducer from './reducers/reducers'
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Main />
        </ BrowserRouter>
    </Provider>, document.getElementById('root'));

// registerServiceWorker();

// ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
