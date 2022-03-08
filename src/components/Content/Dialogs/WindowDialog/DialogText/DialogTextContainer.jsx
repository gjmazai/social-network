import { connect } from "react-redux";
import { addMyMessageActionCreator, updateNewMessageTextActionCreator } from "../../../../../myRedux/dialogs-reducer";
import DialogText from "./DialogText";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsReducer.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (text) => {
            dispatch(addMyMessageActionCreator(text));
            dispatch(updateNewMessageTextActionCreator(''));
        },
        onUpdateMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
    }
}


const DialogTextContainer = connect(mapStateToProps, mapDispatchToProps)(DialogText);

export default DialogTextContainer;