import React, {useState} from "react";
import './style.css';
import {Dropdown, InputGroup, FormControl, Form} from "react-bootstrap";

export default function SearchableList(props){
	const {options, onSelect, label, placeholder} = props;
	const [query, setQuery] = useState('');

	function changeHandler(event){
		setQuery(event.target.value);
	}

	const popUpOptionsUI = options.map((option)=>{
		const {value, label} = option;

		if(query.length != 0 && !label.toLocaleLowerCase().includes(query.toLocaleLowerCase())){
			return null;
		}

		return (
			<Dropdown.Item key={value}
										 as="button"
										 onClick={()=>onSelect(value)}>
				{label}
			</Dropdown.Item>
		);
	});


	return (
	<>
		<div className='searchable-list-input'>
			<Form.Label className='searchable-list-label'>{label}</Form.Label>
			<InputGroup>
				<FormControl placeholder={placeholder}
										 autoFocus={true}
										 as="input"
										 type='search'
										 value={query}
										 onChange={changeHandler}/>
			</InputGroup>
		</div>

		<div className='searchable-list'>
			{popUpOptionsUI}
		</div>
	</>
	);
}