import React, { useState } from 'react'
import ToDoForm from '../components/ToDoForm'
import ToDoDisplay from '../components/ToDoDisplay'

const ToDoList = () => {
    const [todo, setTodo] = useState([])

    const displayTodo = (newTodo) =>{
        setTodo([...todo, newTodo])
    }

    const updateCompleteList = (idx, updateComplete) =>{
        const tempList = [...todo]
        tempList[idx].completeTask = updateComplete
        setTodo(tempList)
    }

    const removeFromList = (deleteIdx) =>{
        const filteredList = todo.filter((eachTask, idx)=>idx !== deleteIdx)
        setTodo(filteredList)
    }

    return (
        <div className='center'>ToDoList
            <ToDoForm theTodoList={displayTodo}/>

            <ToDoDisplay 
            todo={todo}
            onUpdateComplete = {updateCompleteList}
            onDelete = {removeFromList}/>
        </div>
    )
}

export default ToDoList