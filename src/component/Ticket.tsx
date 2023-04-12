import { Draggable } from "react-beautiful-dnd";

interface TicketsProps {
	item: { id: string; content: string };
	index: number;
}
const Tickets = ({ item, index }: TicketsProps) => {
	return (
		<Draggable
			draggableId={item.id}
			index={index}
			key={item.id}
		>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					key={item.id}
				>
					{item.content}
				</div>
			)}
		</Draggable>
	);
};

export default Tickets;
