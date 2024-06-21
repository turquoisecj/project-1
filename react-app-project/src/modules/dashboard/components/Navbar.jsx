import '../styles/navbar.css';
import user from '../../../assets/nav/user-icon.png';
import { Searchbar } from './Searchbar';

export function Navbar({ isActive }) {
    return (
        <div className="navbar">
            {isActive && <Searchbar />}
            <div className="user-banner">
                <img className="user-icon" src={user} />
                <p className="user">John Doe</p>
            </div>
        </div>
    )
}