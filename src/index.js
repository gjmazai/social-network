import store from "./myRedux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";


let renderEntireTree = (state) => {
    debugger;

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
    debugger;

    reportWebVitals();

}

renderEntireTree(store.getState()); // вызов первый раз, чтобы произошла первая отрисовка

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});