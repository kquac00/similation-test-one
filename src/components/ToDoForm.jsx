import React, { useState } from 'react'

const ToDoForm = (props) => {
    const [newTodoList, setNewTodoList] = useState ("")
    const [todoList, setTodoList] = useState ([])

    const handleAdd =(e) => {
        e.preventDefault()
        const newList = { newTodoList, todoList, completeTask:false}
        props.theTodoList(newList)
    
        
    }

    return (
        <div className='blackBox'>My to do list:
            <form onSubmit={handleAdd}>
                <label>enter to task: 
                    <input type="text" name="newTodoList"
                    onChange={event => setNewTodoList(event.target.value)}/>
                </label>
                <button type="submit">Add</button>
            </form> 
        </div>
    )
}

export default ToDoForm