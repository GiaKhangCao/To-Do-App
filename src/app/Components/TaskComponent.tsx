import React from "react";

interface TaskComponentProps {
	tasks: string[];
	deleFunction: (index: number) => void;
	handleUpFunction: (index: number) => void;
	handleDownFunction: (index: number) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = ({
	tasks,
	deleFunction,
	handleUpFunction,
	handleDownFunction,
}: TaskComponentProps) => {
	return (
		<div className="taskContainer">
			{tasks.map((task, index) => (
				<div key={index} className="taskItem">
					<input type="checkbox" className="checkbox" />
					<span className="taskText">{task}</span>
					<button className="upButton" onClick={() => handleUpFunction(index)}>
						Up
					</button>
					<button
						className="downButton"
						onClick={() => handleDownFunction(index)}
					>
						Down
					</button>
					<button className="deleteButton" onClick={() => deleFunction(index)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default TaskComponent;
