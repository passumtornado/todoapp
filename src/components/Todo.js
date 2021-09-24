import React from 'react'
import './Todo.css'

const Todo = ({tasks,onDelete,onStatus}) => {

    return (
        <div>
            <div className="todo-contianer">
             <div className={`card ${tasks.completed ? "completed" : " " }`}>
             <h5><span class="header-text">{tasks.name}</span></h5>
             <span>{tasks.date}</span>
             <p className="text-center">{tasks.description}</p>
             <hr />
             <div className="action-section">
             <span className="check" onClick={() => onStatus(tasks.id)}>
               <i className="fas fa-check"></i>
             </span>
            <span className="trash" onClick={() => onDelete(tasks.id)}>
             <i className="fas fa-trash"></i>
            </span>
             </div>
             </div>
            </div>
        </div>
    )
}

export default Todo
