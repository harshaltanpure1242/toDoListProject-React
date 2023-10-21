import React, { useEffect, useState } from 'react'
//import './styles.css'
import NewTodoform from './NewTodoForm';
import ToDoList from './ToDoList';

function App() {
   
     
      const[todos,setTodos]=useState(()=>{
        const localValue=localStorage.getItem("ITEMS")
        if(localValue==null) return[]
        return JSON.parse(localValue)
      })

      useEffect(()=>{
        localStorage.setItem("ITEMS",JSON.stringify(todos))
      },[todos])
   
        function addTodo(tittle){
          setTodos((currentTodos)=>{
            return[
               ...currentTodos,{id:crypto.randomUUID(),tittle ,completed:false},
            ]
          })
        }

        function toggleTodo(id,completed)
        {
          setTodos(currentTodos =>{
            return currentTodos.map(todo=>
              {
                if(todo.id==id)
                {
                  return{...todo,completed}
                }
                return todo;
              })
          })
        }

        function deleteTOdo(id)
        {
          setTodos(currentTodos=>{
            return currentTodos.filter(todos=>todos.id!==id)
          })
        }
        
          

  return (
    <>
   <NewTodoform onSubmit={addTodo}></NewTodoform>
    <h1 className='header'>Todo List</h1>
   
   <ToDoList  todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTOdo}></ToDoList>
    </>
  )
}

export default App
