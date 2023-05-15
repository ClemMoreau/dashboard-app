import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Tickets from "../Ticket/Ticket";

import css from "./Stack.module.css";

interface StackProps {
	droppableId: string;
	items: { id: string; content: string }[];
}

const Stack = ({ droppableId, items }: StackProps) => {
	return (
		<div className={css.stack}>
			<Droppable droppableId={droppableId}>
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{items.map((item, index) => (
							<Tickets
								item={item}
								index={index}
								key={index}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
			<input />
		</div>
	);
};

export default Stack;
