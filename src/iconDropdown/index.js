import React, {useState} from "react";
import UserIcon from "./user-regular.svg";
import './style.css';

// todo: replace icon span with button or a tag for accessibility
export default function IconDropdown(props){
	const {children} = props;
	const [showPopover, setShowPopover] = useState(false);

	function iconMouseOverHandler(){
		setShowPopover(true);
	}

	function iconMouseLeaveHandler(){
		setShowPopover(false);
	}

	const popoverUI = showPopover ? (<div className='icon-popover'>{children}</div>) : null;
	return (
		<span onMouseOver={iconMouseOverHandler}
					onMouseLeave={iconMouseLeaveHandler}
					className='icon-container'>
			{popoverUI}
			<span className='icon'>
				<UserIcon width="24px" height="24px"/>
			</span>
		</span>
	)

}