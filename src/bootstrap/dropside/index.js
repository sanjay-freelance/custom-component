import React, {useState, useRef, useEffect} from "react";
import useDidClickedOutside from "hooks/useDidClickedOutside";
import {dropSideContainerStyle, popUpWrapperStyle, customSelectPopUpState} from './style';
import Popup from './Popup';
import Arrow from './Arrow';
import HiddenSelect from './HiddenSelect';


//todo: support merging classname and Style from props
export default function DropSide(props){
	const {defaultValue, onchange, options, placeHolder, label} = props;
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

	const selectedValue = value ? value : (placeHolder ?  placeHolder : 'Select');
	const popUpUI = showPopUp ? <Popup options={options}
																		 label={label}
																		 renderDown={dropUpRef.current}
																		 onClose={popUpCloseHandler}
																		 onSelect={handleSelect}/> : null;

	const customSelectStyle = showPopUp ? customSelectPopUpState : null;

	return(
	<div className='dropSide'
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
	</div>
	)
}





