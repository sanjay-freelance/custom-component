import React, { useEffect} from "react";

export default function didClickedOutside(ref, callback) {
	useEffect(() => {
		function handleClickOutside(event) {
			callback((ref.current && !ref.current.contains(event.target)))
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}