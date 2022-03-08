import { connect } from "react-redux";
import Users from "./User";
import { setUsersAC, FollowAC, UnfollowAC } from "../../../myRedux/users-redux";

let mapToProps = (state) => {
    return {
        usersData: state.usersReducer.Users,
    }
}

let mapToDispatch = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        Unfollow: (userID) => {
            dispatch(UnfollowAC(userID));
        },
        Follow: (userID) => {
            dispatch(FollowAC(userID));
        }
    }
}

const UsersContainer = connect(mapToProps, mapToDispatch)(Users);

export default UsersContainer;