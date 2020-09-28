import React, {useState, useRef} from "react";
import './style.css';
import didClickedOutside from "hooks/didClickedOutside";

const expandStyle = {
	left: "0"
};

const overlayStyle = {
	display: "block",
	opacity: 0.25
};

export default function SidebarApp(props){
	const {children, content, iconContent} = props;
	const [expandSidebar, setExpandSidebar] = useState(false);
	const [showIcons, setShowIcons] = useState(true);
	const sidebarRef = useRef(null);

	didClickedOutside(sidebarRef,(isClickedOutside)=>{
		setExpandSidebar(!isClickedOutside);
	});

	function sidebarMouseoverHandler(){
		setExpandSidebar(true);
		setShowIcons(false);
	}

	function transitionEndHandler(){
		if(!expandSidebar){
			setShowIcons(true);
		}
	}

	const sideBarExpandStyle = expandSidebar ? expandStyle : null;
	const sideBarOverlayStyle = expandSidebar ? overlayStyle : null;
	const sidebarContent = expandSidebar ? content : null;

	const sidebarIconContent = !expandSidebar && showIcons ? (
		<div className='sidebar-icon-holder-container'>
			<div className='sidebar-icon-holder'>{iconContent}</div>
		</div>
	): null;

	return(
	<div className='sidebar-container'>
		<div className='sidebar-placeholder'/>
		<div className='sidebar-overlay'
				 style={sideBarOverlayStyle}/>
		<div className='sidebar'
				 style={sideBarExpandStyle}
				 ref={sidebarRef}
				 onTransitionEnd={transitionEndHandler}
				 onMouseOver={sidebarMouseoverHandler}>
			{sidebarContent}
			{sidebarIconContent}
		</div>
		<div className='sidebar-app'>
			{children}
		</div>
	</div>
	)

}