import './book.list.css'

import { useEffect } from 'react';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc';
import compose from '../../utils';
import { fetchBooks } from '../../actions';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


const BookList = ({books}) => {
	return (
		<ul className='book-list'>
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

const BookListContainer = ({fetchBooks, books, error, loading}) => {

	useEffect(() => {
		fetchBooks()
	}, [])

	if(loading) {
		return <Spinner />
	}

	if(error) {
		return <ErrorIndicator />
	}

	return (
		<BookList books={books} />
	)
}

const mapStateToProps = (state) => {
	return {
		books: state.books,
		loading: state.loading,
		error: state.error
	}
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
	return {
		fetchBooks: fetchBooks(dispatch, bookstoreService)
	}
}

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)