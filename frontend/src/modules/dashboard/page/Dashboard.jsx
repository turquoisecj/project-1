import { Sidebar } from '../components/Sidebar';
import '../styles/dashboard.css';
import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { DashboardMain } from '../components/DashboardMain';
import { Complaints } from '../../complaints/page/Complaints';

export function Dashboard() {
    const [isActive, setIsActive] = useState(false);

    function handleSelect() {
        setIsActive(true);
    }

    return (
        <div className='wrapper'>
            <Navbar isActive={isActive} />
            <Sidebar isActive={isActive} setIsActive={setIsActive} handleSelect={handleSelect} />
            {isActive ? <Complaints /> : <DashboardMain />}
        </div>
    )
}