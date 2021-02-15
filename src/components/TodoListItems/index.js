import React from 'react';

const TodoListItems = (props) => {

    let TodoValue = props.todo.value;
    const startEditing = ()=>{
        props.startEditing(props.todo.id);
    }

    const changeTodoValue = (event)=>{
         TodoValue = event.target.value;
         console.log(TodoValue);
    }
    const finishEditing = ()=>{

        if (TodoValue)
        {
            props.todo.value = TodoValue;
            props.todo.isEditing = false;
            props.finishEditing(props.todo);
        }

    }

    const deleteTask = ()=>{
        props.deleteTask(props.todo.id);
    }
   
    return (
        <div>
        <li className = "list">
            {props.todo.isEditing ? 
                <>
                <textarea className ="editTask" onChange = {changeTodoValue}  defaultValue = {TodoValue}></textarea>
                <button className ="saveTask"  onClick = {finishEditing}>Update Task</button>
                </>
            :
                <>
                {props.todo.isEditing}{props.todo.value} (<a href="#" class= "edit" onClick = {startEditing}>Edit</a> | <a href="#" class="delete" onClick = {deleteTask}>Delete</a> )
                </>  

            }

              
        </li>
        </div>
    );
};

export default TodoListItems;