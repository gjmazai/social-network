import Posts from "./MyPosts/MyPosts";
import classes from "./ProfileContent.module.css";
import StatusProfile from 'C:/Programming/JS/React-projects/my-message/src/components/Content/Profile/Status/Status.jsx';

const ProfileContent = () => {
    return (
        <div className={classes.ProfileContent}>
            <p className={classes.word}>Мой профиль</p>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/3469057/pub_5f2c54363131c2273a731565_5f2c54838c983213b9a4b764/scale_1200"
                alt="myavatar" className={classes.ava} />

            <StatusProfile />

            <div className={classes.MyPosts}>
                <p>Мои посты:</p>
                <Posts img="https://img-9gag-fun.9cache.com/photo/aw5MXdB_460s.jpg" comment='like' />
                <Posts img="https://i.pinimg.com/originals/20/8a/9b/208a9b5b2880f5ca8a8e39bf1d02f06c.jpg" comment="it's my second post" />
            </div>
        </div>
    );
}

export default ProfileContent;