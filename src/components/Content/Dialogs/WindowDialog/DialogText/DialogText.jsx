import React from "react";
import { addMyMessageActionCreator, updateNewMessageTextActionCreator } from "../../../../../myRedux/dialogs-reducer";
import classes from "./../../Dialogs.module.css";


const DialogText = (props) => {

    let newTextMessage = React.createRef(); // ссылку на текст месседж

    let SendMessage = () => { // функция отправки через обработчик событий
        let text = newTextMessage.current.value;
        let action = addMyMessageActionCreator(text);
        props.dispatch(action);
        action = updateNewMessageTextActionCreator('');
        props.dispatch(action);
    }

    let updateMessageText = () => {
        debugger;
        let text = newTextMessage.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.dialogText}>
            <textarea className={classes.newMessage} rows="5" ref={newTextMessage} onChange={updateMessageText} value={props.newMessageText} ></textarea>
            <button className={classes.sendMessage} onClick={SendMessage}>Send message</button>
        </div>
    );
}

export default DialogText;