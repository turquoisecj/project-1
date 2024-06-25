import { Fragment } from "react";

export function EditModal({dialogEditRef, isEmpty,handleClose, complaints, complaintId, getMap, dispatch, handleUpdate}) {
    return (
        <dialog className="edit-modal" ref={dialogEditRef}>
            <h1 className="dialog-header">View Complaint</h1>
            <button onClick={handleClose} className="close-button">x</button>
            <div className="complaint-details">
                {
                    isEmpty != true ? complaints.filter((complaint) => {
                        return complaint.key === complaintId;
                    }).map((complaint) => {
                        return (
                            <Fragment key={complaintId}>
                                <p>Officer: {complaint.officer}</p>
                                <p>Complaint No: {complaint.complaint_no}</p>
                                <p>Date: {`${complaint.date.getFullYear()}-${(complaint.date.getMonth() + 1) < 9 ? "0" + (complaint.date.getMonth() + 1) : (complaint.date.getMonth() + 1) }-${complaint.date.getDate()}`}</p>
                                <p>Description: {complaint.description}</p>
                                <label for="select-officer">
                                    Update Officer
                                </label>
                                <select
                                    ref={(node) => {
                                        const mapOfficer = getMap()[1];
                                        if(node) {
                                            mapOfficer.set("officerKey", node);
                                        } else {
                                            mapOfficer.delete("officerKey");
                                        }
                                    }}
                                    onChange={(e) => {dispatch({type: "officer", value: e.target.value})}} id="select-officer"
                                >
                                    <option>Bea N.</option>
                                    <option>Osten D.</option>
                                    <option>Bruno M.</option>
                                </select>
                                <label for="select-status">
                                    Update Status
                                </label>
                                <select 
                                    ref={(node) => {
                                        const mapStatus = getMap()[0];
                                        if(node) {
                                            mapStatus.set("statusKey", node);
                                        } else {
                                            mapStatus.delete("statusKey");
                                        }
                                    }}
                                    onChange={(e) => {dispatch({type: "status", value: e.target.value})}} id="select-status"
                                >
                                    <option value="pending">Pending</option>
                                    <option value="complete">Complete</option>
                                </select>
                            </Fragment>
                        )
                    })
                    : ""
                }
            </div>
            <button onClick={handleUpdate} className="update-button">Update Status</button>
        </dialog>
    )
}
