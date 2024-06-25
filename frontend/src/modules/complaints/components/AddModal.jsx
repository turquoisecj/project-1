export function AddModal({handleClose, inputComplaintRef, handleComplaintInput, handleSubmitComplaint, dialogAddRef}) {
    return (
        <dialog className="add-modal" ref={dialogAddRef}>
            <h1 className="dialog-header">Add Complaint</h1>
            <button onClick={handleClose} className="close-button-add">x</button>
            <p>Send your complaints here: </p>
            <textarea className="add-description" ref={inputComplaintRef} onChange={(e) => {handleComplaintInput(e.target.value)}}>
        
            </textarea>
            <div className="buttons-container">
                <button onClick={handleSubmitComplaint} className="add-current">Add</button>
                <button onClick={handleClose} className="cancel-current">Cancel</button>
            </div>
        </dialog>
    )
}
