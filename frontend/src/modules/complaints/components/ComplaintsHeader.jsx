export function ComplaintsHeader({handleAddComplaint}) {
    return (
        <div className="header">
            <h1>Send your Complaints</h1>
            <button onClick={handleAddComplaint} className="add-button">Add Complaint</button>
        </div>
    )
}