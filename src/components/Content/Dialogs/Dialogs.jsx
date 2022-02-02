import Companions from "./Companions/Companions";
import classes from "./Dialogs.module.css"


let dialogsData = [{ // созаем массив объектов
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
},];


const Message = (props) => {
    let ava = "https://avatars.mds.yandex.net/get-zen_doc/3469057/pub_5f2c54363131c2273a731565_5f2c54838c983213b9a4b764/scale_1200";
    if (dialogsData.find(item => item.name === props.Sender)) {
        ava = dialogsData[2].ava;
    }
    return (
        <div className={classes.message}>
            <img src={ava} alt="avatar_in_dialogs" className={classes.avatar_in_dialogs} />
            <p className={classes.sender}>{props.Sender}: {props.message}</p>

        </div>
    );
}

const Dialogs = (props) => {

    let messagesData = [
        { id: "1", message: "Hi how are you?", idSender: "Efim Cimerman", idRecipient: "Stas" },
        { id: "2", message: "I'm fine ty. How you?", idSender: "Stas", idRecipient: "Efim Cimerman" },
        { id: "3", message: "I'm sad. I'm cry. I'm dead_inside", idSender: "Efim Cimerman", idRecipient: "Stas" },
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.list_dialogs}>
                <ul>

                    <Companions name="Olya Kiseleva" last_message="Love you ♥" id="1"
                        ava="https://i.pinimg.com/236x/d5/2c/bd/d52cbdbba8c008534b0455363050aaf8.jpg" />

                    <Companions name="Sasha Krylov" last_message="I love Megumin♥" id="2"
                        ava="https://avatarfiles.alphacoders.com/184/184064.jpg" />

                    <Companions name="Efim Cimerman" last_message="Ghoul ZXC" id="3"
                        ava="https://pbs.twimg.com/profile_images/1328368539565223943/7kDsM9Cl_400x400.jpg" />
                </ul>
            </div>

            <div className={classes.window_dialog}>
                <div className={classes.header_window_dialog}>
                    <h3>Correspondence with {messagesData[0].idSender} via this message</h3>
                </div>

                <div className={classes.main_window_dialog}>
                    <Message message={messagesData[0].message} Sender={messagesData[0].idSender} />
                    <Message message={messagesData[1].message} Sender={messagesData[1].idSender} />
                    <Message message={messagesData[2].message} Sender={messagesData[2].idSender} />
                </div>
            </div>
        </div >
    );
}

export default Dialogs;