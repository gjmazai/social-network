import classes from "./Users.module.css";
import * as axios from 'axios';
import defaultAvatar from "../../../assets/images/defaultAvatar.jpg"

//const getUsers = () => {
const Users = (props) => {
    if (props.usersData.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items);
        });

    }
    // }

    return (
        <div className={classes.Users}>
            {props.usersData.map(
                user => <div className={classes.User} key={user.id}>
                    <div className={classes.ava}>
                        <img className={classes.avatarPhoto} src={user.photos.small != null ? user.photos.small : { defaultAvatar }} alt="defaultAvatar" />
                    </div>
                    <div className={classes.infoUser}>
                        <p>{user.name}</p>
                        <p>{"user.location.country"}: {"user.location.city"}</p>
                        <p>{user.status}</p>
                    </div>
                    <div className={classes.btn}>
                        {user.followed ?
                            <button onClick={() => { props.Unfollow(user.id) }} className={classes.btnFollow}>Unfollow</button> :
                            <button onClick={() => { props.Follow(user.id) }} className={classes.btnFollow}>Follow</button>}
                    </div>
                </div>)}
        </div>
    );


}

export default Users;