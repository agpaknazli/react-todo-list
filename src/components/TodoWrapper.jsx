import React from 'react'
import TodoForm from './TodoForm'
import { FaRegRectangleList } from "react-icons/fa6";
const TodoWrapper = () => {
  return (
   
    <div className='TodoWrapper'> 

    <h1> Get Things Done! <FaRegRectangleList /></h1>

<TodoForm/>
    
    
      </div>




  )
}

export default TodoWrapper