import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

class App extends Component {
	render() {
		return(
			<Segment>
				<Grid>
					<Grid.Row>
						<Grid.Column computer={6} columns={4}>
							<Segment>
								<BookList />
							</Segment>
						</Grid.Column>
						<Grid.Column computer={10}>
							<Segment>
								<BookDetail />
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		);
	}
}

export default App;