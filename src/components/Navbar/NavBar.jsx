
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="MainNavBar">
                <ul className="item">
                    <li><a href='/profile'>Profile</a></li>
                    <li><a href='/news'>News</a></li>
                    <li><a href='/dialogs'>Dialogs</a></li>
                    <li><a href='/friends'>Friends</a></li>
                    <li><a href='/music'>Music</a></li>
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