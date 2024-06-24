import { Fragment, useReducer, useRef, useState } from "react";
import "../styles/complaints.css";
import { ComplaintsHeader } from "../components/ComplaintsHeader";
import { ComplaintsTable } from "../components/ComplaintsTable";
import { EditModal } from "../components/EditModal";
import { AddModal } from "../components/AddModal";

export function Complaints() {

    const dialogEditRef = useRef(null);
    const dialogAddRef = useRef(null);
    const inputComplaintRef = useRef(null);
    const statusRef = useRef(null);
    const officerRef = useRef(null);

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

    function getMap() {
        if(!statusRef.current) {
            statusRef.current = new Map();
        }
        if(!officerRef.current) {
            officerRef.current = new Map();
        }

        return [statusRef.current, officerRef.current];
    }

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
                    return (complaintId === complaint.key ? {...complaint, status: action.value.toUpperCase(), hasChangedStatus:true} : {...complaint});
                })
            }
            case "officer": {
                return currentState.map((complaint) => {
                    return (complaintId === complaint.key ? {...complaint, officer: action.value, hasChangedOfficer:true} : {...complaint});
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
            case "update-staging": {
                return complaints.map((complaint) => {
                    return (complaintId === complaint.key ? {...complaint, officer: action.nodes[1], status: action.nodes[0].toUpperCase(), hasChanged:false} : {...complaint});
                })
            }
        }
    }

    // proceed staged updates to a state that renders the final complaint data
    function handleUpdate() {
        if(complaintUpdate[complaintId].hasChangedOfficer && complaintUpdate[complaintId].hasChangedStatus) {
            setComplaints(complaintUpdate);
        }else {
            const mapStatus = getMap()[0];
            const nodeStatus = mapStatus.get("statusKey");
            const mapOfficer = getMap()[1];
            const nodeOfficer = mapOfficer.get("officerKey");
            
            setComplaints(complaints.map((complaint) => {
                return (complaintId === complaint.key ? {...complaint, officer: nodeOfficer.value, status: nodeStatus.value.toUpperCase(), hasChanged:false} : {...complaint});
            }))
            dispatch({type: "update-staging", nodes:[nodeStatus.value, nodeOfficer.value]});
        }
        inputComplaintRef.current.value = "";
        dialogEditRef.current.close();

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
                <ComplaintsHeader handleAddComplaint={handleAddComplaint} />
                <ComplaintsTable isEmpty={isEmpty} complaints={complaints} handleDelete={handleDelete} handleView={handleView} />
                <EditModal 
                    dialogEditRef={dialogEditRef} handleClose={handleClose} complaints={complaints} 
                    complaintId={complaintId} getMap={getMap} updateComplaints={updateComplaints} 
                    dispatch={dispatch} handleUpdate={handleUpdate} 
                />
                <AddModal handleClose={handleClose} dialogAddRef={dialogAddRef} inputComplaintRef={inputComplaintRef} 
                    handleComplaintInput={handleComplaintInput} handleSubmitComplaint= {handleSubmitComplaint} 
                />
            </div>
        </div>
    )
}