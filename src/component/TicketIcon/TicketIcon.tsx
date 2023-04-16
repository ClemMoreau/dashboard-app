const TicketIcon = () => {
	return (
		<div
			style={{
				borderRadius: "50%",
				border: "1px solid #3FB950",
				width: "16px",
				height: "16px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				style={{
					width: "4px",
					height: "4px",
					borderRadius: "50%",
					background: "#3FB950",
				}}
			></div>
		</div>
	);
};

export default TicketIcon;
