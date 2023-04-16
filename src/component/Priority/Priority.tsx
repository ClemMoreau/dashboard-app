import React from "react";

import "./Priority.css";

const PRIORITY = ["Low", "Medium", "High"];

interface PriorityProps {
	priority: number;
}
const Priority = ({ priority }: PriorityProps) => {
	return (
		<div className={PRIORITY[priority].toLowerCase()}>{PRIORITY[priority]}</div>
	);
};

export default Priority;
