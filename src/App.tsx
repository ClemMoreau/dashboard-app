import React from "react";

import "./App.css";
import Backlog from "./component/Backlog/Backlog";

function App() {
	return (
		<div className="main_container">
			<div className="backlog">
				<Backlog />
			</div>
		</div>
	);
}

export default App;
