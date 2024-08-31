import React from 'react'
import { FaRegCheckCircle, FaRegTrashAlt,FaRegCircle} from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';

const TodoItem = ({todo, toggle, deleteTodo}) => {
 
const handleToDo = ()=>{
  return(


    deleteTodo(todo.id)
  )
}


  return (
    <div  
    className='bg-primary text-white p-3 d-flex justify-content-center select-none' style={{ gap: '2rem'}} onClick={()=>toggle(todo.id)} >
      
      { todo.İsComplete ? (
        
      <FaRegCheckCircle /> 
      ) : (
        <FaRegCircle />
      )}

     <p className={ `d-flex ${todo.isComplete ? "line-through": ""}`}> 

 {todo.text} 

     </p>
       
      <FaRegTrashAlt className=''
      
      onClick={handleToDo}
      />
      
      
      </div>




  )
}




export default TodoItem