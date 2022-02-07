import React from "react";
import classes from "./../../Dialogs.module.css";



const DialogText = (props) => {

    let newTextMessage = React.createRef(); // ссылку на текст месседж

    let SendMessage = () => { // функция отправки через обработчик событий
        let text = newTextMessage.current.value;
        props.addMyMessage(text);
        props.updateNewMessageText('');
    }

    let updateMessageText = () => {
        debugger;
        let text = newTextMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogText}>
            <textarea className={classes.newMessage} rows="5" ref={newTextMessage} onChange={updateMessageText} value={props.newMessageText} ></textarea>
            <button className={classes.sendMessage} onClick={SendMessage}>Send message</button>
        </div>
    );
}

export default DialogText;