import '../styles/sidebar.css';
import { useRef, useState } from 'react';
import logout from '../../../assets/sidebar/logout-icon.png';
import { Link } from 'react-router-dom';

export function Sidebar({ isActive, handleSelect, setIsActive}) {

    const [isExpanded, setIsExpanded] = useState(false);

    const activeClass = isActive ? "option-complaints active" : "option-complaints";

    const menuOptionRef = useRef(null);
    const menuRef = useRef(null);

    function handleToggle() {
        if(!isExpanded) {
            menuOptionRef.current.style.transition = "top 0.30s cubic-bezier(.88,-0.1,.27,.89)";
            menuOptionRef.current.style.top = "80%";
            setTimeout(() => {
                menuRef.current.textContent = "→";
            },100)
            setIsExpanded(true);
        }else {
            menuOptionRef.current.style.top = "12%";
            setTimeout(() => {
                menuRef.current.innerHTML = "&equiv;";
            },100)
            setIsExpanded(false);
            setIsActive(false);
        }
    }

    return (
        <div className="sidebar">
            <h1 className='brand'><span className="brand-color">Safe</span>Trace</h1>
            <ul>
                <Link to={'/'}>
                    <li onClick={handleToggle} className='expandable-menu'><span ref={menuRef} className="menu-expand">&equiv;</span>Dashboard</li>
                </Link>
                <Link to={'dashboard/complaints'}>
                    <li ref={menuOptionRef} onClick={handleSelect} className={activeClass} >Complaints</li>
                </Link>
            </ul>
            <button className="logout-button">
                <img className="logout-icon" src={logout} />Logout
            </button>
        </div>
    )
}