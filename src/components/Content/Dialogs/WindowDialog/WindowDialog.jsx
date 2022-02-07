import React from "react";
import classes from "./../Dialogs.module.css";
import DialogText from "./DialogText/DialogText";
import Messages from './MessagesDialog/Messages';
// import dialogsData from "./../Dialogs.jsx";


const WindowDialog = (props) => {

    let messagesElements = props.messagesData.map(el => <Messages message={el.message}
        Sender={el.idSender} dialogsData={props.dialogsData} />);


    return (
        <div className={classes.window_dialog}>
            <div className={classes.header_window_dialog}>
                <h3>Correspondence with {props.messagesData[0].idSender} via this message</h3>
            </div>

            <div className={classes.main_window_dialog}>
                {messagesElements} {/* теперь тут спокойно меняем на сам массив и ариться не надо */}
            </div>

            <DialogText addMyMessage={props.addMyMessage} updateNewMessageText={props.updateNewMessageText} newMessageText={props.newMessageText} />

        </div>
    );
}

export default WindowDialog;