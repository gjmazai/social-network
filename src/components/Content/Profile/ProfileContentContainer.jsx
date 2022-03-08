import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../myRedux/profile-reducer";
import ProfileContent from "./ProfileContent";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profileReducer,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
            dispatch(updateNewPostTextActionCreator("")); // зануляем
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    }
}


const ProfileContentContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContent);

export default ProfileContentContainer;