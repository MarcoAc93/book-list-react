import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions';
import { List } from 'semantic-ui-react';

import {  bindActionCreators } from 'redux';

class BookList extends Component {
	render() {
		return(
			<List relaxed='very' size='large'>
				{this.props.books.map(book => {
					return (
						<List.Item 
							key={book.title}
							onClick={() => this.props.selectBook(book)}>
							{book.title}
						</List.Item>
					)
				})}
			</List>
		);
	}
}

// le pasa los objetos del state al componente en props
function mapStateToProps(state){
	return {
		books: state.books
	}
}

// le pasa las acciones al contenedor en props y dispatch las pasa a los reducers
function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

// exporta un contenedor que esta conciente del estado de redux
// y hace disponibles las acciones en props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);