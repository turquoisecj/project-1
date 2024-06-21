import '../styles/dashboard-main.css';

export function DashboardMain() {
    return (
        <div className="main">
            <DashboardDescription />
            <DashboardComplaints />
        </div>
    )
}

function DashboardDescription() {
    return (
        <div className="desc-container">
            <div className="header-container">
                <h1 className="header-dashboard">Dashboard Overview</h1>
                <p>View Your Complaints</p>
            </div>
            <p className="complaints-desc">Check out your complaints, track their status, and manage them efficiently. Stay informed about the progress and 
                resolution of your reported issues.
            </p>
        </div>
    )
}

function DashboardComplaints() {
    return (
        <div className="complaints-container">
            <div>
                <h2>Total Complaints</h2>
                <div>
                    <span>25</span>complaints
                </div>
            </div>
            <div>
                <h2>Active Complaints</h2>
                <div>
                    <span>10</span>complaints
                </div>
            </div>
            <div>
                <h2>Resolved Complaints</h2>
                <div>
                    <span>15</span>complaints
                </div>
            </div>
        </div>
    )
}