const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = { // используем как инициализацию стейта

    postData: [
        { id: "1", comment: "like", imgUrl: "https://img-9gag-fun.9cache.com/photo/aw5MXdB_460s.jpg" },
        { id: "2", comment: "It's my second post", imgUrl: "https://i.pinimg.com/originals/20/8a/9b/208a9b5b2880f5ca8a8e39bf1d02f06c.jpg" },
    ],
    newPostText: 'Naruto is a great anime',

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "3",
                comment: action.postMessage,
                imgUrl: action.postImg,
            };
            state.postData.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

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
