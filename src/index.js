import state from "./myRedux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addMyMessage, addPost, updateNewMessageText, updateNewPostText } from "./myRedux/state"

// addPost('Test post', "https://i.pinimg.com/originals/cf/6b/87/cf6b8793db9a1a67d09ac3a75af817fa.jpg");

let renderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMyMessage={addMyMessage}
                updateNewMessageText={updateNewMessageText} />
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();

}


renderEntireTree();