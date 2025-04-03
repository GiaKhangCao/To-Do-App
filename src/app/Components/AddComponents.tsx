"use client";
import React, { useState } from "react";
import TaskComponent from "./TaskComponent";

const AddComponents = () => {
	const [tasks, setTasks] = useState<string[]>();
	const [newTask, setNewTask] = useState<string>("");

	const handleAddTask = () => {
		if (newTask.trim() !== "") {
			setTasks([...(tasks || []), newTask]);
			setNewTask("");
		}
	};

	return (
		<>
			<div className="addContainer">
				<input
					type="text"
					placeholder="Add a new task"
					className="addBox"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<button className="addButton" onClick={handleAddTask}>
					Add
				</button>
			</div>
			<TaskComponent tasks={tasks || []} />
		</>
	);
};

export default AddComponents;
