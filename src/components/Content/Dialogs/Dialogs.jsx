import Companions from "./Companions/Companions";
import classes from "./Dialogs.module.css"
import WindowDialog from "./WindowDialog/WindowDialog.jsx";





const Dialogs = (props) => {

    let dialogsElemenents = props.dialogPage.dialogsData.map(d => <Companions id={d.id} name={d.name}
        last_message={d.last_message} ava={d.ava} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.list_dialogs}>
                <ul>
                    {dialogsElemenents}
                </ul>
            </div>

            <WindowDialog dialogsData={props.dialogPage.dialogsData}
                messagesData={props.dialogPage.messagesData}
                newMessageText={props.dialogPage.newMessageText}
                addMyMessage={props.addMyMessage}
                updateNewMessageText={props.updateNewMessageText} />
        </div >
    );
}

export default Dialogs;