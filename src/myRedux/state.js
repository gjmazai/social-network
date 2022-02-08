

let store = {

    _state: {
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
    },
    _callSubscriber() {
        console.log("State changed");
    },


    getState() {
        return this._state;
    },
    arrayLast(array) {
        return array[array.length - 1];
    },
    subscribe(observer) {
        this._callSubscriber = observer; // в качестве callback прилетает  this._renderEntireTree из index.js и функция из этого файла теперь выполняет 
        // действия this._renderEntireTree 
    },


    // addPost(postMessage, postImg) {

    // },
    // updateNewPostText(newText) {


    // },
    // addMyMessage(textMessage) { // функция для добавления нового сообщения
    //     // let newId = this._state.dialogPage.messagesData[-1].id + 1;

    // },
    // updateNewMessageText(newMessageText) {

    // },

    dispath(action) { // {type: "ADD-MESSAGE"}
        if (action.type === "ADD-POST") {
            let newPost = {
                id: "3",
                comment: action.postMessage,
                imgUrl: action.postImg,
            };

            this._state.profilePage.postData.push(newPost);
            this._callSubscriber(this._state);
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === "ADD-MY-MESSAGE") {
            let newMessage = {
                id: this.arrayLast(this._state.dialogPage.messagesData).id + 1,
                message: action.textMessage,
                idSender: "Stas",
                idRecipient: "Efim Cimerman"
            }
            this._state.dialogPage.messagesData.push(newMessage);
            this._callSubscriber(this._state);
        }
        else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
    }


}

export default store;

