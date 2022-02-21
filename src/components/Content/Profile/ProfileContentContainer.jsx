import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../myRedux/profile-reducer";
import ProfileContent from "./ProfileContent";



const ProfileContentContainer = (props) => { // Контейнерная компонента

    let buttonAddMyPosts = (text) => {
        props.dispatch(addPostActionCreator(text));
        props.dispatch(updateNewPostTextActionCreator("")); // зануляем
    }

    let onPostChange = (text) => { // функция для вписывания деталей в texarea
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (<ProfileContent addPost={buttonAddMyPosts} updateNewPostText={onPostChange} profilePage={props.profilePage} />);
}

export default ProfileContentContainer;