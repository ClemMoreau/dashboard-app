import { Draggable } from "react-beautiful-dnd";

import css from "./Ticket.module.css";
import Priority from "../Priority/Priority";
import TicketIcon from "../TicketIcon/TicketIcon";

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
					className={css.ticket}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					key={item.id}
				>
					<TicketIcon />
					<div className={css.content}>
						<div className={css.title}>{item.content}</div>
						<div className={css.priority}>
							<Priority priority={0} />
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default Tickets;
