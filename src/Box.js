import React from "react";

const Box = (props) => {
	const style = {
		padding: "2rem",
		margin: "1rem",
		fontSize: "1.5rem",
		backgroundColor: props.color,
	};
	console.log(style);
	return <span style={style}>{props.text}</span>;
};

export default Box;
