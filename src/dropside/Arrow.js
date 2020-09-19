import React from "react";
import {arrowButtonStyle} from "./style";
import './style.css';


export default function Arrow(props){
	const {showPopup, onClick} = props;
	const style = !showPopup ? {
		transform: 'rotate(90deg)',
	} : null;
	const buttonStyle = showPopup ? Object.assign({}, arrowButtonStyle, {background: 'white'}) : arrowButtonStyle;
	return (
		<button style={buttonStyle}
						onClick={onClick}
						className='dropSide-custom-select-arrow' >
			<div style={style}>&#62;</div>
		</button>
	)
}