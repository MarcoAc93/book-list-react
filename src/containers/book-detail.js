import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render(){
		if (!this.props.book) {
			return (<div>Select a book!</div>);
		}
		return(
			<div>
				<Header as='h1'>{this.props.book.title}</Header>
				<Header sub>{this.props.book.content}</Header>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);