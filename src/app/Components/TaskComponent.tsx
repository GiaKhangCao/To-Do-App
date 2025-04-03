import React from "react";

interface TaskComponentProps {
	tasks: string[];
}

const TaskComponent: React.FC<TaskComponentProps> = ({
	tasks,
}: TaskComponentProps) => {
	return (
		<div className="taskContainer">
			{tasks.map((task, index) => (
				<div key={index} className="taskItem">
					<input type="checkbox" className="checkbox" />
					<span className="taskText">{task}</span>
					<button className="deleteButton">Delete</button>
				</div>
			))}
		</div>
	);
};

export default TaskComponent;
