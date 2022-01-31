
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="MainNavBar">
                <ul className="item">
                    <li><a href='#s'>Profile</a></li>
                    <li><a href='#s'>News</a></li>
                    <li><a href='#s'>Dialogs</a></li>
                    <li><a href='#s'>Music</a></li>
                </ul>
            </div>
            <div className="Add-NavBar">
                <ul className="item">
                    <li><a href='#s'>Settings</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;