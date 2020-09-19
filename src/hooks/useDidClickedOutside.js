import React, { useState, useEffect} from "react";

export default function useDidClickedOutside(ref) {
	const [clickedOutside, setClickedOutside] = useState(false)
	useEffect(() => {
		function handleClickOutside(event) {
			setClickedOutside((ref.current && !ref.current.contains(event.target)))
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return clickedOutside;
}