import React from "react";
import Posts from "./MyPosts/MyPosts";
import classes from "./ProfileContent.module.css";
import StatusProfile from 'C:/Programming/JS/React-projects/my-message/src/components/Content/Profile/Status/Status.jsx';


const ProfileContent = (props) => {

    let PostItem = props.profilePage.postData.map(post => <Posts img={post.imgUrl} comment={post.comment} />);


    let newPostElement = React.createRef();

    let buttonAddMyPosts = () => { // функция для обработки нажатия клика на кнопку
        let text = newPostElement.current.value;
        props.dispath({ type: "ADD-POST", postMessage: text });
        //newPostElement = ''; // занулили строку, чтобы после отправки снова была пустая строка
        // тут я не имею право занулять, занулять можно только в state
        props.dispath({ type: "UPDATE-NEW-POST-TEXT", newText: "" }); // вот так зануляем через state. Передавая ему пустую строку после отправки
    }

    let onPostChange = () => { // функция для вписывания деталей в texarea
        let text = newPostElement.current.value;
        props.dispath({ type: "UPDATE-NEW-POST-TEXT", newText: text });
    }

    return (
        <div className={classes.ProfileContent}>
            <p className={classes.word}>Мой профиль</p>
            <img src="https://i.pinimg.com/originals/e2/14/32/e21432435f46ea9a9e146e20a556e694.jpg"
                alt="myavatar" className={classes.ava} />

            <StatusProfile />

            <div className={classes.MyPosts}>
                <h3>Мои посты:</h3>
                <div className={classes.MyPostAdd}>
                    <textarea className={classes.textAdd} ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} />
                    <button className={classes.btnAdd} onClick={buttonAddMyPosts}>Add post</button>
                </div>
                {PostItem}
            </div>
        </div>
    );
}

export default ProfileContent;