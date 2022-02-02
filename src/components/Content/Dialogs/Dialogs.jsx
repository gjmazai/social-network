import Companions from "./Companions/Companions";
import classes from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.list_dialogs}>
                <Companions name="Olya Kiseleva" last_message="Love you ♥"
                    ava="https://i.pinimg.com/236x/d5/2c/bd/d52cbdbba8c008534b0455363050aaf8.jpg" />

                <Companions name="Sasha Krylov" last_message="I love Megumin ♥"
                    ava="https://avatarfiles.alphacoders.com/184/184064.jpg" />

                <Companions name="Efim Cimerman" last_message="Ghoul ZXC"
                    ava="https://pbs.twimg.com/profile_images/1328368539565223943/7kDsM9Cl_400x400.jpg" />

            </div>

            <div className={classes.window}>

            </div>
        </div>
    );
}

export default Dialogs;