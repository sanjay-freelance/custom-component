import React, {useState, useRef, useEffect} from "react";
import {Dropdown} from 'react-bootstrap'
import useDidClickedOutside from "hooks/useDidClickedOutside";
import {dropSideContainerStyle, popUpWrapperStyle, customSelectPopUpState} from './style';
import Popup from './Popup';
import Arrow from './Arrow';
import HiddenSelect from './HiddenSelect';
import SearchableList from "../bootstrap/popups/searchableList";
import './style.css';


//todo: support merging classname and Style from props
export default function DropSideList(props){
	const {defaultValue, onchange, options, placeholder, label} = props;
	const [value, setValue] = useState(defaultValue);
	const [showPopUp, setShowPopUp] = useState(false);
	const dropUpRef = useRef();
	const domRef = useRef(null);
	const clickedOutside = useDidClickedOutside(domRef);

	useEffect(()=>{
		if(clickedOutside && showPopUp){
			setShowPopUp(false);
		}

	},[clickedOutside]);

	function popUpCloseHandler(popUpState){
		dropUpRef.current = popUpState
	}

	function handlePopUpToggle(){
		setShowPopUp(!showPopUp);
	}

	function handleSelect(value){
		setValue(value);
		onchange && onchange(value);
		setShowPopUp(false)
	}

	const selectedValue = value ? value : (placeholder ?  placeholder : 'Select');
	const popUpUI = showPopUp ? <Popup options={options}
																		 renderDown={dropUpRef.current}
																		 onClose={popUpCloseHandler}>
		<SearchableList options={options}
										onSelect={handleSelect}
										placeholder={placeholder}
										label={label}/>
	</Popup>: null;

	const customSelectStyle = showPopUp ? customSelectPopUpState : null;

	return(
	<Dropdown className='dropSide'
			 ref={domRef}
			 style={dropSideContainerStyle}>
		<HiddenSelect options={options}
									value={value}/>
		<div style={customSelectStyle}
				 className='dropSide-custom-select'
				 onClick={handlePopUpToggle}>
			{selectedValue}
		</div>
		<Arrow showPopup={showPopUp}
					 onClick={handlePopUpToggle}/>
		<div style={popUpWrapperStyle}>
			{popUpUI}
		</div>
	</Dropdown>
	)
}





