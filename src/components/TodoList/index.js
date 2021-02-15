import React from 'react';
import TodoListItems from '../TodoListItems';

const TodoList = (props) => {
    const items = props.todos.map((todo)=>{
        // return <li>{todo.value}</li>
        return <TodoListItems  key = {todo.id} todo = {todo} startEditing = {props.startEditing}  finishEditing = {props.finishEditing} deleteTask= {props.deleteTask}/>
    }) 
    return (
        <div>
            <ui>
                {items}
            </ui>   
        </div>
    );
};

export default TodoList;