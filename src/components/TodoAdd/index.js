import React from 'react';

const TodoAdd = (props) => {
    let TodoValue = "";
    
    const updateTodo = (event) =>{
        TodoValue = event.target.value;
    }

    const addTask = ()=>{
        if (TodoValue)
        {
            props.addTask(TodoValue);
            TodoValue = "";
            document.getElementById("task").value = "";
        }
    }
    return (
        <div>
            <h3>Todo App</h3>
            <textarea id="task" onChange = {updateTodo} defaultValue = {TodoValue}></textarea>
            <button id ="btn" onClick = {addTask}>Add</button>

        </div>
    );
};

export default TodoAdd;