import React from 'react'
import {TodoItem} from './TodoItem'

 function  ToDoList({todos ,toggleTodo,deleteTodo})
{
   return( <ul className='list'>
   {todos.length===0 && "No Todos List"}
   {todos.map(todo=>{
     return( <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>)
   })}  
 </ul>)
}
export default ToDoList