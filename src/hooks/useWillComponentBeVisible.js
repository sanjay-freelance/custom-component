import {useEffect, useRef, useState} from "react";

// https://stackoverflow.com/questions/55326406/react-hooks-value-is-not-accessible-in-event-listener-function
// https://dmitripavlutin.com/react-hooks-stale-closures/
export default function useWillComponentBeVisible(domRef, initialValue = true, onUnMount){
	const [spaceAvailable, setSpaceAvailable] = useState(initialValue);

	const spaceAvailableRef = useRef(spaceAvailable);

	useEffect(()=>{
		window.addEventListener('resize', renderUpIfNoSpace);
		window.addEventListener('scroll', renderUpIfNoSpace);
		renderUpIfNoSpace();
		return ()=>{
			window.removeEventListener('resize', renderUpIfNoSpace);
			window.removeEventListener('scroll', renderUpIfNoSpace);
			onUnMount && onUnMount(spaceAvailableRef.current);
		}
	},[]);

	function renderUpIfNoSpace(){
		setSpaceAvailable((prevValue)=>{
			const domElement = domRef.current;
			const domRect = domElement.getBoundingClientRect();
			const possibleDomBottomPosition = prevValue ?  domRect.bottom : (domRect.bottom + domRect.height);
			const windowInnerHeight = window.innerHeight;

			const newValue = (windowInnerHeight >= possibleDomBottomPosition);
			spaceAvailableRef.current = newValue;

			return newValue;
		});
	}

	return spaceAvailable;
}