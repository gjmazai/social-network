import classes from "./Companions.module.css"

const Companions = (props) => {
    return (
        <div className={classes.companion}>
            <img src={props.ava} alt="ava" className={classes.img} />
            <p className={classes.name}>{props.name}</p>
            <p className={classes.last_message}>{props.name}: {props.last_message}</p>
        </div>
    );
}

export default Companions;