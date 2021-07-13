import React from "react";
import Box from "./Box";
import "./style.css";

const App = ()  => {
	return (
		<div>
			<div className="flexContainer">
				<Box text="H" color="#76448A" />
				<Box text="E" color="#2471A3" />
				<Box text="L" color="#17A589" />
				<Box text="L" color="#229954" />
				<Box text="O" color="#F1C40F" />
				<Box text="W" color="#D35400" />
				<Box text="O" color="#7F8C8D" />
				<Box text="L" color="#34495E" />
				<Box text="R" color="#1C2833" />
				<Box text="D" color="#E74C3C" />
			</div>
		</div>
	);
};;

export default App;
