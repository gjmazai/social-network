const SET_USER = "SET_USER";
const FOLLOWED = "FOLLOWED";
const UNFOLLLOWED = "UNFOLLOWED";


let initialState = {
    Users: [
        // {
        //     id: 1,
        //     name: 'Olya',
        //     photos: 'https://i.pinimg.com/236x/d5/2c/bd/d52cbdbba8c008534b0455363050aaf8.jpg',
        //     status: 'All is OK',
        //     location: {
        //         country: "Kazakhstan",
        //         city: "Temirtay",
        //     },
        //     followed: true
        // },
        // {
        //     id: 2,
        //     name: 'Efim',
        //     photos: 'https://pbs.twimg.com/profile_images/1328368539565223943/7kDsM9Cl_400x400.jpg',
        //     location: {
        //         country: "Russia",
        //         city: "Barnaul",
        //     },
        //     status: "I'm ghoul",
        //     followed: true
        // },
        // {
        //     id: 3,
        //     name: 'Sasha Krylov',
        //     photos: 'https://avatarfiles.alphacoders.com/184/184064.jpg',
        //     location: {
        //         country: "Russia",
        //         city: "Buisk",
        //     },
        //     status: 'I love Megumin',
        //     followed: false
        // },

    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER:
            return {
                ...state,
                Users: [...state.Users, ...action.users],
            };

        case FOLLOWED:
            return {
                ...state,
                Users: state.Users.map(u => { // Всегда помнить, что map возвращает новый массив на основе старого
                    if (u.id === action.userID) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            };

        case UNFOLLLOWED:
            return {
                ...state,
                Users: state.Users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            };

        default: return state;
    }
}

export const FollowAC = (userID) => {
    return {
        type: FOLLOWED,
        userID,
    }
}

export const UnfollowAC = (userID) => {
    return {
        type: UNFOLLLOWED,
        userID,
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USER,
        users,
    };
}

export default usersReducer;