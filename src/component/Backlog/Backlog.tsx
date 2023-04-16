import Stack from "../Stack/Stack";
import { DragDropContext } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import css from "./Backlog.module.css";

const Backlog = () => {
	const [items, setItems] = useState<{ id: string; content: string }[]>([]);
	const [items2, setItems2] = useState<{ id: string; content: string }[]>([]);
	const [items3, setItems3] = useState<{ id: string; content: string }[]>([]);
	const [items4, setItems4] = useState<{ id: string; content: string }[]>([]);

	useEffect(() => {
		const items = [];
		for (let i = 0; i < 10; i++) {
			items.push({
				id: `item-${i}`,
				content: `item ${i}`,
			});
		}
		setItems(items);
		const items2 = [];
		for (let i = 0; i < 10; i++) {
			items2.push({
				id: `item-${i + 10}`,
				content: `item ${i + 10}`,
			});
		}
		setItems2(items2);
		const items3 = [];
		for (let i = 0; i < 10; i++) {
			items3.push({
				id: `item-${i + 20}`,
				content: `item ${i + 20}`,
			});
		}
		setItems3(items3);
		const items4 = [];
		for (let i = 0; i < 10; i++) {
			items4.push({
				id: `item-${i + 30}`,
				content: `item ${i + 30}`,
			});
		}
		setItems4(items4);
	}, []);

	const getSourceList = (droppableId: string) => {
		switch (droppableId) {
			case "list":
				return items;
			case "list2":
				return items2;
			case "list3":
				return items3;
			case "list4":
				return items4;
			default:
				return items;
		}
	};

	const getDestList = (droppableId: string) => {
		switch (droppableId) {
			case "list":
				return items;
			case "list2":
				return items2;
			case "list3":
				return items3;
			case "list4":
				return items4;
			default:
				return items;
		}
	};

	const updateList = (
		sourceList: any[],
		sourceId: string,
		destinationList: any[],
		destinationId: string
	) => {
		switch (destinationId) {
			case "list":
				setItems(destinationList);
				break;
			case "list2":
				setItems2(destinationList);
				break;
			case "list3":
				setItems3(destinationList);
				break;
			case "list4":
				setItems4(destinationList);
				break;
			default:
				setItems(destinationList);
				break;
		}

		switch (sourceId) {
			case "list":
				setItems(sourceList);
				break;
			case "list2":
				setItems2(sourceList);
				break;
			case "list3":
				setItems3(sourceList);
				break;
			case "list4":
				setItems4(sourceList);
				break;
			default:
				setItems(sourceList);
				break;
		}
	};

	const onDragEnd = (result: any) => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		const sourceList = getSourceList(result.source.droppableId);
		const destList = getDestList(result.destination.droppableId);
		const itemToMove = sourceList[result.source.index];
		const destIndex = result.destination.index;

		const sourceIndex = sourceList.indexOf(itemToMove);
		if (sourceIndex >= 0 && destIndex >= 0) {
			sourceList.splice(sourceIndex, 1);
			destList.splice(destIndex, 0, itemToMove);
		}

		updateList(
			sourceList,
			result.source.droppableId,
			destList,
			result.destination.droppableId
		);
	};
	return (
		<div className={css.container}>
			<DragDropContext onDragEnd={onDragEnd}>
				<Stack
					droppableId={"list"}
					items={items}
				/>
				<Stack
					droppableId={"list2"}
					items={items2}
				/>
				<Stack
					droppableId={"list3"}
					items={items3}
				/>
				<Stack
					droppableId={"list4"}
					items={items4}
				/>
			</DragDropContext>
		</div>
	);
};

export default Backlog;
