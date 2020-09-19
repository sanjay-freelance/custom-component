import {useEffect, useRef, useState} from "react";

export default function useWillComponentBeVisible(domRef, initialValue = true, onUnMount){
	const [spaceAvailable, setSpaceAvailable] = useState(initialValue);
	// todo: figure out why stateValue is sometimes not updating
	// temp solution: store the value in ref
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

	function isSpaceAvailable(){
		const domElement = domRef.current;
		const domRect = domElement.getBoundingClientRect();
		const possibleDomBottomPosition = spaceAvailableRef.current ?  domRect.bottom : (domRect.bottom + domRect.height);
		const windowInnerHeight = window.innerHeight;
		return (windowInnerHeight >= possibleDomBottomPosition)
	}

	function renderUpIfNoSpace(){
		const oldValue = spaceAvailableRef.current;
		const newValue = isSpaceAvailable();
		if(oldValue !== newValue){
			setSpaceAvailable(newValue);
			spaceAvailableRef.current = newValue;
		}
	}

	return spaceAvailable;
}