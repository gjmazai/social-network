import classes from "./../../Dialogs.module.css";
// import dialogsData from "./../Dialogs.jsx";


function Messages(props) {
    let ava = "https://i.pinimg.com/originals/e2/14/32/e21432435f46ea9a9e146e20a556e694.jpg";
    if (props.dialogsData.find(item => item.name === props.Sender)) {
        ava = props.dialogsData[2].ava;
    }
    return (
        <div className={classes.message}>
            <img src={ava} alt="avatar_in_dialogs" className={classes.avatar_in_dialogs} />
            <p className={classes.sender}>{props.Sender}: {props.message}</p>

        </div>
    );
}

export default Messages;