export function handleAddComplaint() {
    dialogAddRef.current.showModal();
}

export function handleClose() {
    dialogEditRef.current.close();
    dialogAddRef.current.close();
    inputComplaintRef.current.value = "";
}

export function handleComplaintInput(description) {
    setComplaintInput((prevState) => {return {...prevState, description: description}});
}

export function handleDelete(id) {
    setComplaints(complaints.filter((complaint) => {
        return complaint.key !== id;
    }))
    dispatch({type: "delete", id: id});
}

export function handleSubmitComplaint() {
    setComplaints([...complaints,{...complaintInput, key: complaints[complaints.length - 1].key + 1}]);
    dispatch({type: "add", value: {...complaintInput, key: complaints[complaints.length - 1].key + 1}});
    handleClose();
}

export function handleUpdate() {
    setComplaints(complaintUpdate);
    dialogEditRef.current.close();
    inputComplaintRef.current.value = "";
}

export function handleView(selectedComplaint) {
    dialogEditRef.current.showModal();
    setComplaintId(selectedComplaint);
}