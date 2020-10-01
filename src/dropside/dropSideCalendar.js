import React, {useState, useRef, useEffect} from "react";
import useDidClickedOutside from "hooks/useDidClickedOutside";
import {dropSideContainerStyle, popUpWrapperStyle, customSelectPopUpState} from './style';
import Popup from './Popup';
import Arrow from './Arrow';
import DayPicker from "react-day-picker";
import './style.css';
import 'react-day-picker/lib/style.css';


//todo: support merging classname and Style from props
export default function DropSideCalendar(props){
	const {defaultValue, onchange, options, placeholder} = props;
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

	function handleDayClick(day){
		const dayAsStr = day.toLocaleDateString();
		setValue(dayAsStr);
		onchange && onchange(dayAsStr);
		setShowPopUp(false)
	}

	const selectedValue = value ? value : (placeholder ?  placeholder : 'Select');
	const popUpUI = showPopUp ? <Popup options={options}
																		 renderDown={dropUpRef.current}
																		 onClose={popUpCloseHandler}>
		<DayPicker onDayClick={handleDayClick}/>
	</Popup>: null;

	const customSelectStyle = showPopUp ? customSelectPopUpState : null;

	return(
	<div className='dropSide'
						ref={domRef}
						style={dropSideContainerStyle}>
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
	</div>
	)
}





