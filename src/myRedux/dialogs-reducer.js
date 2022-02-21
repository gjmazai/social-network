const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = { // используем как инициализацию стейта
    dialogsData: [
        {
            id: "1",
            name: "Olya Kiseleva",
            last_message: "Love you ♥",
            ava: "https://i.pinimg.com/236x/d5/2c/bd/d52cbdbba8c008534b0455363050aaf8.jpg",
        },
        {
            id: "2",
            name: "Sasha Krylov",
            last_message: "I love Megumin♥",
            ava: "https://avatarfiles.alphacoders.com/184/184064.jpg",
        },
        {
            id: "3",
            name: "Efim Cimerman",
            last_message: "Ghoul ZXC",
            ava: "https://pbs.twimg.com/profile_images/1328368539565223943/7kDsM9Cl_400x400.jpg",
        },
    ],
    messagesData: [
        { id: 1, message: "Hi how are you?", idSender: "Efim Cimerman", idRecipient: "Stas" },
        { id: 2, message: "I'm fine ty. How you?", idSender: "Stas", idRecipient: "Efim Cimerman" },
        { id: 3, message: "I'm sad. I'm cry. I'm dead_inside", idSender: "Efim Cimerman", idRecipient: "Stas" },
        { id: 4, message: "Ghoul ZXC", idSender: "Efim Cimerman", idRecipient: "Stas" },

    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MY_MESSAGE:
            let newMessage = {
                id: arrayLast(state.messagesData).id + 1,
                message: action.textMessage,
                idSender: "Stas",
                idRecipient: "Efim Cimerman"
            }
            state.messagesData.push(newMessage);
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;

        default:
            return state;
    }


}

export const addMyMessageActionCreator = (text) => {
    return {
        type: ADD_MY_MESSAGE,
        textMessage: text,
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text,
    }
}

const arrayLast = (array) => {
    return array[array.length - 1];
}

export default dialogsReducer;
