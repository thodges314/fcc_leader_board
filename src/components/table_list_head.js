import React from 'react';

const TableListHead = ({onListSelect}) => {
	return(
		<thead>
		<tr>
		<th>rank</th>
		<th>user</th>
		<th onClick = {() => {onListSelect('https://fcctop100.herokuapp.com/api/fccusers/top/recent'); console.log("list 30");}}>points in last 30 days</th>
		<th onClick = {() => {onListSelect('https://fcctop100.herokuapp.com/api/fccusers/top/alltime'); console.log("list all");}}>points in all time</th>
		</tr>
		</thead>
		);
}

export default TableListHead;