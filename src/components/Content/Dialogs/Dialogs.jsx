import Companions from "./Companions/Companions";
import classes from "./Dialogs.module.css"
import WindowDialog from "./WindowDialog/WindowDialog.jsx";





const Dialogs = (props) => {

    let dialogsElemenents = props.dialogPage.dialogsReducer.dialogsData.map(d => <Companions id={d.id} name={d.name}
        last_message={d.last_message} ava={d.ava} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.list_dialogs}>
                <ul>
                    {dialogsElemenents}
                </ul>
            </div>

            <WindowDialog dialogsData={props.dialogPage.dialogsReducer.dialogsData}
                messagesData={props.dialogPage.dialogsReducer.messagesData}
                newMessageText={props.dialogPage.dialogsReducer.newMessageText}
                dispatch={props.dispatch} />
        </div >
    );
}

export default Dialogs;