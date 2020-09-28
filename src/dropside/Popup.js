import React, {useRef} from "react";
import useWillComponentBeVisible from "hooks/useWillComponentBeVisible";
import {popUpStyle} from "./style";
import './style.css';

export default function PopUp(props){
	const {onClose, renderDown = true, children} = props;
	const domRef = useRef(null);
	const isSpaceAvailable = useWillComponentBeVisible(domRef, renderDown, onClose);

	let style = null;
	if(isSpaceAvailable){ // dropDown
		style = popUpStyle
	} else  { // dropUp
		style =  Object.assign({}, popUpStyle, {
			bottom: "-40px",
			flexDirection: 'column-reverse'
		});
		delete style.top;
	}

	return (
		<div ref={domRef}
				 className='dropSide-popup'
				 style={style}>
			{children}
		</div>
	);
}