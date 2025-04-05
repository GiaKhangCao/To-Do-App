import React from "react";
import { Trash2, MoveUp, MoveDown, Check } from "lucide-react";

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
				<label key={index} className="taskItem">
					<input type="checkbox" className="checkbox" />
					<span className="checkMark">
						<Check className="checkIcon" size={16} />
					</span>
					<p className="taskText">{task}</p>
					<button className="upButton" onClick={() => handleUpFunction(index)}>
						<MoveUp className="upIcon" />
					</button>
					<button
						className="downButton"
						onClick={() => handleDownFunction(index)}
					>
						<MoveDown />
					</button>
					<button className="deleteButton" onClick={() => deleFunction(index)}>
						<Trash2 />
					</button>
				</label>
			))}
		</div>
	);
};

export default TaskComponent;
