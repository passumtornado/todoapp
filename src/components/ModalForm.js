import React from 'react'

const ModalForm = ({taskName,handleTask,description, addTask}) => {
    return (
        <div>
            <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create Task</h5>
                    <button
                    type="button"
                    className="btn-close"
                    data-mdb-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body">
                <form>
                <div className="form-group">
                <label>Add Task</label>
                <input type="text" className="form-control" value={taskName} name='taskName' onChange={handleTask}/>
                </div>
                 <div className="form-group">
                  <label>Description</label>
                  <textarea rows="5" className="form-control" value={description} name='description' onChange={handleTask}></textarea>
                 </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-mdb-dismiss="modal" onClick={addTask}>
                    Create
                    </button>
                    <button type="button" className="btn btn-secondary">Cancel</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalForm
