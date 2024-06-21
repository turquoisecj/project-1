import { Fragment, useReducer, useRef, useState } from "react";
import "../styles/complaints.css";
import deleteIcon from "../../../assets/complaints/delete-icon.png";
import viewIcon from "../../../assets/complaints/view-icon.png";
import personIcon from "../../../assets/complaints/person-icon.png";

export function Complaints() {

    const dialogEditRef = useRef(null);
    const dialogAddRef = useRef(null);
    const inputComplaintRef = useRef(null);
    // const statusRef = useRef(null);
    // const officerRef = useRef(null);

    const [complaintId, setComplaintId] = useState(null);
    const [isEmpty, setIsEmpty] = useState(false);
    const [complaints, setComplaints] = useState([
        {
            key: 0,
            officer: "Bea N.",
            complaint_no: "CP-202433",
            date: new Date("February 29, 2024"),
            description: "DESC 1",
            status: "PENDING"
        },
        {
            key: 1,
            officer: "Osten D.",
            complaint_no: "CP-202433",
            date: new Date("February 29, 2024"),
            description: "DESC 2",
            status: "PENDING"
        },
        {
            key: 2,
            officer: "Bruno M.",
            complaint_no: "CP-202433",
            date: new Date("February 29, 2024"),
            description: "DESC 3",
            status: "PENDING"
        },
    ])

    // dummy insert one new complaint
    const [complaintInput, setComplaintInput] = useState({
        key: complaints.length !== 0 ? complaints[complaints.length - 1].key + 1 : 0,
        officer: "John Doe",
        complaint_no: "CP-202433",
        date: new Date("February 29, 2024"),
        description: "",
        status: "PENDING"
    })
    // state for staging complaints update
    const [complaintUpdate, dispatch] = useReducer(updateComplaints, complaints);

    // function to handle viewing a complaint
    function handleView(selectedComplaint) {
        dialogEditRef.current.showModal();
        setComplaintId(selectedComplaint);
    }

    // function getMap() {
    //     if(!statusRef.current) {
    //         statusRef.current = new Map();
    //     }
    //     if(!officerRef.current) {
    //         officerRef.current = new Map();
    //     }

    //     return [statusRef.current, officerRef.current];
    // }

    //function to close modal
    function handleClose() {
        dialogEditRef.current.close();
        dialogAddRef.current.close();
        inputComplaintRef.current.value = "";
    }
    
    // reducer function that updates the staging state for initial complaints before updating and rendering
    function updateComplaints(currentState,action) {
        switch(action.type) {
            case "status": {
            
                return currentState.map((complaint) => {
                    return (complaintId === complaint.key ? {...complaint, status: action.value.toUpperCase()} : {...complaint});
                })
            }
            case "officer": {
                return currentState.map((complaint) => {
                    return (complaintId === complaint.key ? {...complaint, officer: action.value} : {...complaint});
                })
            }
            case "delete": {
                return currentState.filter((complaint) => {
                    return complaint.key !== action.id;
                })
            }
            case "add": {
                return [...currentState, action.value];
            }
            case "add-from-empty": {
                return [action.value];
            }
        }
    }

    // proceed staged updates to a state that renders the final complaint data
    function handleUpdate() {
        setComplaints(complaintUpdate);
        dialogEditRef.current.close();
        // const mapStatus = getMap()[0];
        // const nodeStatus = mapStatus.get(statusKey);
        // nodeStatus.value
        inputComplaintRef.current.value = "";
    }

    // function to handle delete complaint
    function handleDelete(id) {
        if(complaints.length !== 0) {
            setComplaints(complaints.filter((complaint) => {
                return complaint.key !== id;
            }))
            dispatch({type: "delete", id: id});
        }else {
            setIsEmpty(true);
        }
        
    }

    // function to handle show modal for input of a single complaint
    function handleAddComplaint() {
        dialogAddRef.current.showModal();
    }

    // function to submit the input complaint
    function handleSubmitComplaint() {
        if(complaints.length > 0) {
            setComplaints([...complaints,{...complaintInput, key: complaints[complaints.length - 1].key + 1}]);
            dispatch({type: "add", value: {...complaintInput, key: complaints[complaints.length - 1].key + 1}});
        }else {
            setComplaints([{...complaintInput, key: 0}]);
            dispatch({type: "add-from-empty", value: {...complaintInput, key: 0}});
        }
        handleClose();
    }

    //used to modify the description of a complaint
    function handleComplaintInput(description) {
        setComplaintInput((prevState) => {return {...prevState, description: description}});
    }    

    return (
        <div className="complaints">
            <div className="complaints-main">
                <div className="header">
                    <h1>Send your Complaints</h1>
                    <button onClick={handleAddComplaint} className="add-button">Add Complaint</button>
                </div>
                <table>
                    <tr>
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
                                    <button onClick={() => {handleDelete(complaint.key)}}><img src={deleteIcon} /></button>
                                    <button onClick={()=> {handleView(complaint.key)}}><img src={viewIcon} /></button>
                                </td>
                            </tr>
                        )
                    }): ""}
                </table>
                <dialog ref={dialogEditRef}>
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
                                        <select onChange={(e) => {dispatch({type: "officer", value: e.target.value})}} id="select-officer">
                                            <option>Bea N.</option>
                                            <option>Osten D.</option>
                                            <option>Bruno M.</option>
                                        </select>
                                        <label for="select-status">
                                            Update Status
                                        </label>
                                        <select onChange={(e) => {dispatch({type: "status", value: e.target.value})}} id="select-status">
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
                <dialog className="add-modal" ref={dialogAddRef}>
                    <h1 className="dialog-header">Add Complaint</h1>
                    <button onClick={handleClose} className="close-button-add">x</button>
                    <p>Send your complaints here: </p>
                    <textarea ref={inputComplaintRef} onChange={(e) => {handleComplaintInput(e.target.value)}}>

                    </textarea>
                    <div className="buttons-container">
                        <button onClick={handleSubmitComplaint} className="add-current">Add</button>
                        <button onClick={handleClose} className="cancel-current">Cancel</button>
                    </div>
                </dialog>
            </div>
        </div>
    )
}