import React,{useState,useEffect} from 'react'
import AddTask from './AddTask'
import ModalForm from './ModalForm'
import Todo from './Todo'
import SortTask from './SortTask'


const TodoList = () => {
    const [taskName,setTaskName]=useState('')
    const [description,setDescription]=useState('')
    const [tasks,setTasks] = useState([])
    const [status,setStatus] = useState('All')
    const [filtertasks,setFilterTasks] = useState([])

    const handleTask =(e)=>{
        const {name,value} = e.target
         if(name === "taskName"){
             setTaskName(value)
         }else{
             setDescription(value)
         }
    }
    const sumbitTaskhandler =(e)=>{
           e.preventDefault()
           setTasks([
               ...tasks,{name:taskName,description:description,completed:false,id:Math.random()*1000}
           ]);
           setTaskName('');
           setDescription('');
          
    }
    const handleDelete = (id) => {
       setTasks(tasks.filter((task)=>task.id !== id))
    }
   const handleStatus = (id)=>{
       setTasks(tasks.map(item => {
           if(item.id === id){
               return{
                  ...item,completed: !item.completed
               };
           }
           return item
       }))
   }
   const statusHandler = (e) =>{
       setStatus(e.target.value)
   }
   const filterHandler = ()=>{
       switch (status) {
           case "Completed":
               setFilterTasks(tasks.filter(task => task.completed === true))
               break;
           case "Uncompleted":
               setFilterTasks(tasks.filter(task => task.completed === false))
               break;
           default:
              setFilterTasks(tasks)
               break;
       }
   }
   useEffect(()=>{
       filterHandler()
   },[tasks,status])
    return (
        <div>
          <div className="header-container">
              <h5>Tasks: {tasks.length} </h5>
              <AddTask />
          </div>
           <ModalForm task={taskName} description={description} handleTask={handleTask} addTask={ sumbitTaskhandler}/>
          <div className="body-container">
          <div className="sort-section">
              <SortTask statusHandler={statusHandler} />
          </div>
          <div className="todo-body">
           {filtertasks.map(task=>(
            <Todo tasks={task} key={task.id} onDelete={handleDelete} onStatus={handleStatus}/>
           )
           )}
          </div>
          </div>    
        </div>
    )
}

export default TodoList
