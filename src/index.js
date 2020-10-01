import React from "react";
import { render } from "react-dom";
import {DropSideList ,DropSideCalendar}from "./dropside";
import IconDropDown from "./iconDropdown";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import UserPopover from './bootstrap/userPopover';
import Sidebar from './SidebarApp';

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


function App(){
	return (
	<>
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">CORE</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Dashboard</Nav.Link>
				</Nav>
				<IconDropDown>
					<UserPopover name="Sanjay" role="Admin"/>
				</IconDropDown>

				<IconDropDown>
					<UserPopover name="Sanjay" role="Admin"/>
				</IconDropDown>

			</Navbar.Collapse>
		</Navbar>

		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<DropSideList options={options} label='Select Country'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<input type='search'/>
		<DropSideCalendar />
		<input type='search'/>
		</>
	)
}

function FormApp(){

	const sideBarMinContent = (<span className='sidebar-min-content'>CORE</span>)

	const sideBarExpandedContent = (
		<div className='sidebar-content'>
			<div className='logo'>CORE</div>
			<div className='company-info'>
				<span>
					Reference & Enquiry
				</span>
				<span>
					Privacy Policy
				</span>
				<div className='empty-div'/>
				<span>
					Congruent Solution Inc
				</span>
				<span>
					All Rights Reserved
				</span>
				<div className='empty-div'/>
				<span className='logo'>CONGRUENT</span>
			</div>
		</div>
	);
	return (
	<Sidebar content={sideBarExpandedContent}
					 iconContent={sideBarMinContent}>
				<App/>
	</Sidebar>
	)
}
render((<div><FormApp/></div>), document.getElementById("app"));


