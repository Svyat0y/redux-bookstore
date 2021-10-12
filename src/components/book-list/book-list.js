import './book.list.css'

import { useEffect } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';


const BookList = ({books}) => {

	useEffect(() => {
		console.log('useefect: load books')
	}, [])

	return (
		<ul>
			{
				books.map((book) => {
					return (
						<li key={book.id}>
							<BookListItem book={book} />
						</li>
					)
				})
			}
		</ul>
	)
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(BookList)