import store from "./myRedux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let renderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                dispath={store.dispath.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();

}

renderEntireTree(store.getState()); // вызов первый раз, чтобы произошла первая отрисовка

store.subscribe(renderEntireTree);