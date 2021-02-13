import React from 'react';
import { Button } from 'react-bootstrap';

const Add = ({task,setTask}) => {

const  handleClick = (event) =>{
    // console.log(event.target.value);
   setTask(event.target.value);
}

     return (
        <>
            <textarea className="ml-3 mr-2" id = "task" placeholder="Enter the task todo" value = {task} onChange = {handleClick}></textarea>
         </>
    );
};

export default Add;