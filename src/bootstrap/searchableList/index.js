import React, {useState, useRef} from "react";
import useWillComponentBeVisible from "hooks/useWillComponentBeVisible";
import {popUpStyle} from "./style";
import './style.css';

export default function SearchableList(props){
	const {options, onSelect, label, onClose, renderDown = true} = props;
	const [query, setQuery] = useState('');
	const domRef = useRef(null);
	const isSpaceAvailable = useWillComponentBeVisible(domRef, renderDown, onClose);

	function changeHandler(event){
		setQuery(event.target.value);
	}

	const optionsUI = options.map((option)=>{
		const {value, label} = option;
		if(query.length != 0 && !label.toLocaleLowerCase().includes(query.toLocaleLowerCase())){
			return null;
		}
		return (
		<li key={value} onClick={()=>onSelect(value) }>
			{label}
		</li>
		);
	});

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
		<label>{label}</label>
		<input type='search' value={query} onChange={changeHandler}></input>
		<ul>{optionsUI}</ul>
	</div>
	);
}