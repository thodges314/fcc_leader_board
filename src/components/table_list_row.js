import React from 'react';

const TableListRow = ({dataPoint, rank}) =>{
	return(
		<tr>
		<td>{rank}</td>
		<td>
		<div className="media">
		<div className="media-left media-img">
		<img className="media-object" src={dataPoint.img} alt="user icon" />
		</div>
		<div className="media-body">
		<a href={`https://www.freecodecamp.com/${dataPoint.username}`}>
		<h4 className="media-heading">{dataPoint.username}</h4>
		</a>
		</div>
		</div>
		</td>
		<td>{dataPoint.recent}</td>
		<td>{dataPoint.alltime}</td>
		</tr>
		);
};



export default TableListRow;