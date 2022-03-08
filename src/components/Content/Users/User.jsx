import classes from "./Users.module.css";

const Users = (props) => {

    return (
        <div className={classes.Users}>
            {props.usersData.map(
                user => <div className={classes.User} key={user.id}>
                    <div className={classes.ava}>
                        <img className={classes.avatarPhoto} src={user.avatar} alt="https://i.pinimg.com/736x/da/32/25/da3225afbba6479de513ac57194416ab.jpg" />
                    </div>
                    <div className={classes.infoUser}>
                        <p>{user.name}</p>
                        <p>{user.location.country}: {user.location.city}</p>
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