import React, { useState } from 'react'

const ToDoDisplay = (props) => {


    return (
        <div className='blackBox'>
            <table>
                <thead>
                    <tr>
                        <td>Task</td>
                        <td>Completed</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                {
                    props.todo.map((thisTodoList, idx) => (
                        <tr key={idx} style={{ color: "blue" }}>
                            <td>{thisTodoList.todoList}</td>
                            <td>{thisTodoList.newTodoList}
                                <input type="checkbox" checked={thisTodoList.completeTask}
                                    onChange={(e) => props.onUpdateComplete(idx, e.target.checked)} />
                            </td>
                            <td>
                                <button onClick={()=>props.onDelete(idx)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div >
    )
}

export default ToDoDisplay