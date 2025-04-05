"use client";
import React, { useEffect, useState } from "react";
import TaskComponent from "./TaskComponent";

const AddComponents = () => {
	const [tasks, setTasks] = useState<string[]>();
	const [newTask, setNewTask] = useState<string>("");

	const handleAddTask = () => {
		if (newTask.trim() !== "") {
			setTasks([...(tasks || []), newTask]);
			setNewTask("");
		} else {
			alert("Please enter a task.");
		}
	};

	useEffect(() => {
		const inputElement = document.getElementById("addTaskInput");
		const handleEnterKey = (event: KeyboardEvent) => {
			if (event.key === "Enter") {
				handleAddTask();
			}
		};

		if (inputElement) {
			inputElement.addEventListener("keydown", handleEnterKey);
		}
		return () => {
			if (inputElement) {
				inputElement.removeEventListener("keydown", handleEnterKey);
			}
		};
	}, [newTask]);

	const handleDeleteTask = (index: number) => {
		if (tasks) {
			const updatedTasks = tasks.filter((_, i) => i !== index);
			setTasks(updatedTasks);
		}
	};

	const handelUp = (index: number) => {
		if (tasks && index > 0) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index - 1]] = [
				updatedTasks[index - 1],
				updatedTasks[index],
			];
			setTasks(updatedTasks);
		}
	};

	const handleDown = (index: number) => {
		if (tasks && index < tasks.length - 1) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index + 1]] = [
				updatedTasks[index + 1],
				updatedTasks[index],
			];
			setTasks(updatedTasks);
		}
	};

	return (
		<div className="contentBox">
			<div className="addContainer">
				<input
					type="text"
					id="addTaskInput"
					placeholder="Add a new task"
					className="addBox"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<button className="addButton" onClick={handleAddTask}>
					Add
				</button>
			</div>
			<TaskComponent
				tasks={tasks || []}
				deleFunction={handleDeleteTask}
				handleUpFunction={handelUp}
				handleDownFunction={handleDown}
			/>
		</div>
	);
};

export default AddComponents;
