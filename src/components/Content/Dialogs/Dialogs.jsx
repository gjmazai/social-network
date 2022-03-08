import Companions from "./Companions/Companions";
import classes from "./Dialogs.module.css"
import WindowDialog from "./WindowDialog/WindowDialog.jsx";





const Dialogs = (props) => {

    let dialogsElemenents = props.dialogsData.map(d => <Companions key={d.id} id={d.id} name={d.name}
        last_message={d.last_message} ava={d.ava} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.list_dialogs}>
                <ul>
                    {dialogsElemenents}
                </ul>
            </div>

            <WindowDialog dialogsData={props.dialogsData}
                messagesData={props.messagesData}
                newMessageText={props.newMessageText}
                dispatch={props.dispatch} />
        </div >
    );
}

export default Dialogs;