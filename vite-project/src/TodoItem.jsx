
import React from 'react'

 export function TodoItem({completed,id,tittle,toggleTodo,deleteTodo})
{
    return(<li >
        <label>
              <input type='checkbox' 
              checked={completed}
              onChange={e=>toggleTodo(id,e.target.checked)}></input>
             {tittle}        
        </label>
         <button 
         onClick={()=>deleteTodo(id)} 
         className='btn btn-danger'>Delete</button>
      </li>)
}
