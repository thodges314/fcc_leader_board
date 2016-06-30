import React from 'react';
import TableListRow from './table_list_row';
import TableListHead from './table_list_head';

const TableList = (props) => {

	const listOfPeople = props.dataPoints.map((dataPoint, index) => {
		return(
			<TableListRow
			dataPoint = {dataPoint}
			rank = {index+1}
			key = {dataPoint.username} />
			);});


	return(
		<table>
		<TableListHead onListSelect = {props.onListSelect} />
		<tbody>
		{listOfPeople}
		</tbody></table>
		);

}

export default TableList;