const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = { // используем как инициализацию стейта

    postData: [
        { id: 1, comment: "like", imgUrl: "https://img-9gag-fun.9cache.com/photo/aw5MXdB_460s.jpg" },
        { id: 2, comment: "It's my second post", imgUrl: "https://i.pinimg.com/originals/20/8a/9b/208a9b5b2880f5ca8a8e39bf1d02f06c.jpg" },
    ],
    newPostText: 'Naruto is a great anime',

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: lastArray(state.postData).id + 1,
                comment: action.postMessage,
                imgUrl: action.postImg,
            };
            return {
                ...state,
                postData: [...state.postData, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newText };
        default:
            return state;
    }

}

const lastArray = (array) => {
    return array[array.length - 1];
}

export const addPostActionCreator = (text, img) => {
    return {
        type: ADD_POST,
        postMessage: text,
        postImg: img,
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default profileReducer;
