let renderEntireTree = () => {
    console.log("State changed");
}

let state = {
    profilePage: {
        postData: [
            { id: "1", comment: "like", imgUrl: "https://img-9gag-fun.9cache.com/photo/aw5MXdB_460s.jpg" },
            { id: "2", comment: "It's my second post", imgUrl: "https://i.pinimg.com/originals/20/8a/9b/208a9b5b2880f5ca8a8e39bf1d02f06c.jpg" },
        ],
        newPostText: 'Naruto is a great anime',
    },

    dialogPage: {
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
    },

}

//     Функции для страницы Профиля

export const addPost = (postMessage, postImg) => {

    let newPost = {
        id: "3",
        comment: postMessage,
        imgUrl: postImg,
    };

    state.profilePage.postData.push(newPost);
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

//     Функции для страницы диалогов

export let addMyMessage = (textMessage) => { // функция для добавления нового сообщения
    // let newId = state.dialogPage.messagesData[-1].id + 1;
    let newMessage = {
        id: arrayLast(state.dialogPage.messagesData).id,
        message: textMessage,
        idSender: "Stas",
        idRecipient: "Efim Cimerman"
    }
    state.dialogPage.messagesData.push(newMessage);
    renderEntireTree(state);
}

export let updateNewMessageText = (newMessageText) => {
    debugger;
    state.dialogPage.newMessageText = newMessageText;
    renderEntireTree(state);
}


export default state;


let arrayLast = (array) => {
    return array[array.length - 1];
}