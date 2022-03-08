
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="MainNavBar">
                <ul className="item">
                    <li><NavLink to='/profile'>Profile</NavLink></li>
                    <li><NavLink to='/news'>News</NavLink></li>
                    <li><NavLink to='/dialogs'>Dialogs</NavLink></li>
                    <li><NavLink to='/friends'>Friends</NavLink></li>
                    <li><NavLink to='/users'>Users</NavLink></li>
                    <li><NavLink to='/music'>Music</NavLink></li>
                    <li><NavLink to='/themes'>Themes</NavLink></li>
                </ul>
            </div>
            <div className="Add-NavBar">
                <ul className="item">
                    <li><a href='/setting'>Settings</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;