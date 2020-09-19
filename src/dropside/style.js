/* Non - Overridable CSS values are given as style | styledComponents */

/* Relative Container to hold absolute children of items */
const dropSideContainerStyle = {
	position: 'relative',
	display: 'flex',
	alignItems: 'center'
};

/* hide default <select> element: */
const selectStyle = {
	display: 'none'
};

const customSelectPopUpState = {
	borderTopRightRadius: "0px",
	borderBottomRightRadius: "0px",
	borderRight: "none"
}

const arrowButtonStyle = {
	display: 'flex', /* Important so that child arrow inside have the width matching content */
	position: 'absolute',
	right: '0px', /* right, padding, minWidth are adjusted to get color overlap */
	padding: '3px',
	minWidth: '32px',
	fontSize: '24px',
	background: 'none',
	border: 'none',
	outline: 'none',
	zIndex: 1
};

const popUpWrapperStyle = {
	position: 'relative'
};

/* pop absolute relative to it container*/
const popUpStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	top: '-40px',
	left: "-1px"
};

export {
	dropSideContainerStyle,
	selectStyle,
	customSelectPopUpState,
	arrowButtonStyle,
	popUpWrapperStyle,
	popUpStyle
}