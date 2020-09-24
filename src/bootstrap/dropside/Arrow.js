import React from "react";


export default function Arrow(props){
	const {showPopup, onClick} = props;
	const style = !showPopup ? {
		transform: 'rotate(90deg)',
	} : null;

	return (
		<button onClick={onClick}>
			<div style={style}>&#62;</div>
		</button>
	)
}