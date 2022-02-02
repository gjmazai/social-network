import { NavLink } from "react-router-dom";
import classes from "./Companions.module.css"

const Companions = (props) => {
    const path = "/dialogs/" + props.id;

    return (
        <div className={classes.companion}>
            <NavLink to={path} activeClassName={classes.active} className={classes.a}>
                <img src={props.ava} alt="ava" className={classes.img} />
                <p className={classes.name}>{props.name}</p>
                <p className={classes.last_message}>{props.name}: {props.last_message}</p>
            </NavLink>
        </div>
    );
}

export default Companions;