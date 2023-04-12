import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Tickets from "./Ticket";

interface StackProps {
	droppableId: string;
	items: { id: string; content: string }[];
}

const Stack = ({ droppableId, items }: StackProps) => {
	return (
		<Droppable droppableId={droppableId}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
					style={{ marginLeft: "5%" }}
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
	);
};

export default Stack;
