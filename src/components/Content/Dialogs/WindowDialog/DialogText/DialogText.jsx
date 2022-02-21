import React from "react";
import classes from "./../../Dialogs.module.css";


const DialogText = (props) => {

    let newTextMessage = React.createRef(); // ссылкa на текст месседж

    let SendMessage = () => {
        let text = newTextMessage.current.value;
        props.onSendMessage(text);
    }

    let updateMessageText = () => {
        let text = newTextMessage.current.value;
        props.onUpdateMessageText(text);
    }

    return (
        <div className={classes.dialogText}>
            <textarea className={classes.newMessage} rows="5" ref={newTextMessage} onChange={updateMessageText} value={props.newMessageText} ></textarea>
            <button className={classes.sendMessage} onClick={SendMessage}>Send message</button>
        </div>
    );
}

export default DialogText;