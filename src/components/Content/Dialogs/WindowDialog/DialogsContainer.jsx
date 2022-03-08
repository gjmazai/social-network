import { connect } from "react-redux";
import { addMyMessageActionCreator, updateNewMessageTextActionCreator } from "../../../../myRedux/dialogs-reducer";
import Dialogs from "../Dialogs"

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsReducer.dialogsData,
        messagesData: state.dialogsReducer.messagesData,
        newMessageText: state.dialogsReducer.newMessageText,
    }
}

let mapDispathToProps = (dispath) => {
    return {
        addMessege: (text) => {
            dispath(addMyMessageActionCreator(text));
            dispath(updateNewMessageTextActionCreator(""));
        },
        updateMessage: (text) => {
            dispath(updateNewMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;