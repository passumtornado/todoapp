import React from 'react'
import './Sort.css'

const SortTask = ({statusHandler}) => {
    return (
        <div>
            <form>
                <select onChange={statusHandler} className="filter-task">
                <option value="All">All</option>
                 <option value="Completed">completed</option>
                  <option value="Uncompleted">uncompleted</option>
                </select>
            </form>
        </div>
    )
}

export default SortTask
