import React from "react";
import {Dropdown} from 'react-bootstrap';
import './style.css'


export default function UserPopover(props){
	const {name,role, onLogout, onChangePassword} = props;

	return (
	<div className='user-popover'>
		<Dropdown.ItemText>
			<div className='user-item'>
				<label>User</label>
				<span>{name}</span>
			</div>
		</Dropdown.ItemText>
		<Dropdown.ItemText>
			<div className='user-item'>
				<label>Role</label>
				<span>{role}</span>
			</div>
		</Dropdown.ItemText>
		<Dropdown.Item as="button" onClick={onChangePassword}>
			Change Password
		</Dropdown.Item>
		<Dropdown.Item as="button" onClick={onLogout}>
			Logout
		</Dropdown.Item>
	</div>
	);
}