const [complaintUpdate, dispatch] = useReducer(updateComplaints, complaints);
    
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
    }
}