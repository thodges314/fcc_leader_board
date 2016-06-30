import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TableList from './components/table_list';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			leaders: [],
			tableUrl: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
		};

		this.fetchLeaders();
	}

	fetchLeaders() {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = () => {
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var myArray = JSON.parse(xmlhttp.responseText);
				this.setState({leaders: myArray});
				//console.log(this.state.leaders);
			}
		};

		xmlhttp.open('GET', this.state.tableUrl, true);
		xmlhttp.send();
	}

	render() {
		return <TableList
		dataPoints = {this.state.leaders}
		onListSelect = {tableUrl => {this.setState({tableUrl}); this.fetchLeaders();}}
		/>
		console.log(tableUrl);
	}

}

ReactDOM.render(<App />, document.querySelector('.container'));
