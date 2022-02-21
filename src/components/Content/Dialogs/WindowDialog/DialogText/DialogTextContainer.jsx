import { addMyMessageActionCreator, updateNewMessageTextActionCreator } from "../../../../../myRedux/dialogs-reducer";
import DialogText from "./DialogText";


const DialogTextContainer = (props) => {

    let sendMessage = (text) => {
        props.dispatch(addMyMessageActionCreator(text));
        props.dispatch(updateNewMessageTextActionCreator(''));
    }

    let updateMessageText = (text) => {
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (<DialogText onSendMessage={sendMessage} onUpdateMessageText={updateMessageText} newMessageText={props.newMessageText} />);
}

export default DialogTextContainer;