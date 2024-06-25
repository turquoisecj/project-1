import deleteIcon from "../../../assets/complaints/delete-icon.png";
import viewIcon from "../../../assets/complaints/view-icon.png";
import personIcon from "../../../assets/complaints/person-icon.png";

export function ComplaintsTable({isEmpty, complaints,handleDelete, handleView}) {
    return (<table className="complaints-table">
        <tr className="complaints-header-cells">
            <th>OFFICER</th>
            <th>COMPLAINT NO</th>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
            <th style={{textAlign: "center"}}>ACTION</th>
        </tr>
        {isEmpty != true ? complaints.map((complaint) => {
            return (
                <tr className="complaint" key={complaint.key}>
                    <td><img className="profilePic" src={personIcon} /> {complaint.officer}</td>
                    <td style={{fontWeight: 'bolder'}}>{complaint.complaint_no}</td>
                    <td style={{color: "#383f3f"}}>{complaint.date.toLocaleString(undefined, {year: 'numeric',month: 'long', day: 'numeric'})}</td>
                    <td style={{fontSize: "15px"}}>{complaint.description}</td>
                    <td>{complaint.status === "PENDING" ? <span className="status">{complaint.status}</span>: <span className="complete">{complaint.status}</span>}</td>
                    <td className="actionClass">
                        <button className="action-buttons" onClick={() => {handleDelete(complaint.key)}}><img className="button-image" src={deleteIcon} /></button>
                        <button className="action-buttons" onClick={()=> {handleView(complaint.key)}}><img className="button-image" src={viewIcon} /></button>
                    </td>
                </tr>
            )
        }): ""}
    </table>)
}