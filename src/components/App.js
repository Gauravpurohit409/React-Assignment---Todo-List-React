
import React from "react";
import { Button } from "react-bootstrap";
import "./../styles/App.css";
import Add from "./Add";
import TodoContainer from "./TodoContainer/index.";

function App() 
{
	let srno = 0;
	let [task,setTask] = React.useState();

	const deleteTask = (event) => {
		const div = event.target.parentElement;
		const divRoot = div.parentElement;
		console.log(div,divRoot);
		divRoot.removeChild(div);
	}
	const changeValue = (input,btn) =>{
		console.log(input,btn);
		if (input.value.length === 0){
			btn.disabled = true;

		}
		else{
			btn.disabled = false;
			btn.addEventListener("click",edit);
			btn.innerHTML = "Edit";
			input.disabled = true;
			setTask("");
		}
	} 
	

	const edit = (event) => {

		console.log(event.target.parentElement);

	//	console.log(event.target.parentElement.childNodes[0]);
		const input = event.target.parentElement.childNodes[0];
		input.addEventListener("change",(inputObj) =>{
			event.target.disabled = false;
			setTask(inputObj.target.value);
		});
		input.disabled = false;
		
		event.target.innerHTML = "Save";

		event.target.removeEventListener("click",edit);	
		event.target.addEventListener("click",(btn) =>{
			// console.log("btn is ",btn);
			changeValue(input,btn.target);
		});
	}
	const addInRoot = () =>{
	
		const divRoot = document.getElementById("root");
		const div = document.createElement("div");
		
		const input  = document.createElement("input");
		input.value = task;
		input.disabled = true;
		input.style.marginRight = "30px";
		input.style.marginLeft ="20px";
		input.setAttribute("class","list");
		div.appendChild(input);

		const editBtn = document.createElement("button");
		editBtn.setAttribute("class","edit");
		editBtn.innerHTML = "Edit";
		editBtn.style.marginLeft = "20px";
		editBtn.addEventListener("click",edit);
		div.appendChild(editBtn);

		const delBtn = document.createElement("button");
		delBtn.setAttribute("class","delete");
		delBtn.innerHTML = "Delete";
		delBtn.style.marginLeft = "20px";
		delBtn.addEventListener("click",deleteTask);
		div.appendChild(delBtn);

		divRoot.appendChild(div);
		setTask("");
	}
	// <h1> Todo List </h1>
	// 	<Add task = {task} setTask = {setTask} />
	// 	<Button id= "btn" variant="secondary" onClick = {addInRoot}>Add</Button>
       
   return (
	<div id="main">
		<>
		<TodoContainer/>		
		</>
	</div>
	);
}


export default App;
