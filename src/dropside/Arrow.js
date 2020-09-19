import React from "react";
import {arrowButtonStyle} from "./style";
import './style.css';


export default function Arrow(props){
	const {showPopup, onClick} = props;
	const style = !showPopup ? {
		transform: 'rotate(90deg)',
	} : null;

	return (
		<button style={arrowButtonStyle}
						onClick={onClick}
						className='dropSide-custom-select-arrow' >
			<div style={style}>&#62;</div>
		</button>
	)
}