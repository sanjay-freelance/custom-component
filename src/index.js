import React from "react";
import { render } from "react-dom";
import DropSide from "./dropside";

import './style.css'


const options = [
	{
		label: 'USA',
		value: 'usa'
	},
	{
		label: 'Uganda',
		value: 'uganda'
	},
	{
		label: 'Ukraine',
		value: 'ukraine'
	},
	{
		label: 'Australia',
		value: 'australia'
	},
	{
		label: 'India',
		value: 'india'
	},
	{
		label: 'Pakistan',
		value: 'pakistan'
	},
	{
		label: 'South Africa',
		value: 'south africa'
	},
	{
		label: 'China',
		value: 'china'
	},
	{
		label: 'Japan',
		value: 'japan'
	}
];

function FormApp(){
	return (
	<div>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<DropSide options={options} label='Select Country'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<DropSide options={options} label='Select Country'/>
	</div>
	)
}
render((<div><FormApp/></div>), document.getElementById("app"));


