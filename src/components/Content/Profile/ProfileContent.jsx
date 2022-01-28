import "./ProfileContent.css";
import StatusProfile from 'C:/Programming/JS/React-projects/my-message/src/components/Content/Profile/Status/Status.jsx';

const ProfileContent = () => {
    return (
        <div className="ProfileContent">
            <p>Мой профиль</p>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/3469057/pub_5f2c54363131c2273a731565_5f2c54838c983213b9a4b764/scale_1200"
                alt="myavatar" className="MyAvatar" />
            <StatusProfile />
        </div>
    );
}

export default ProfileContent;