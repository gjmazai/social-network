import React from "react";
import classes from "./../../Dialogs.module.css";



const DialogText = (props) => {

    let newTextMessage = React.createRef(); // ссылку на текст месседж

    let SendMessage = () => { // функция отправки через обработчик событий
        let text = newTextMessage.current.value;
        props.dispath({ type: "ADD-MY-MESSAGE", textMessage: text });
        props.dispath({ type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: '' });
    }

    let updateMessageText = () => {
        debugger;
        let text = newTextMessage.current.value;
        props.dispath({ type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: text });
    }

    return (
        <div className={classes.dialogText}>
            <textarea className={classes.newMessage} rows="5" ref={newTextMessage} onChange={updateMessageText} value={props.newMessageText} ></textarea>
            <button className={classes.sendMessage} onClick={SendMessage}>Send message</button>
        </div>
    );
}

export default DialogText;