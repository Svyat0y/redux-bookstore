import './book.list.css'

import { useEffect } from 'react';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc';
import compose from '../../utils';
import { booksLoaded } from '../../actions';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';


const BookList = ({books, bookstoreService, booksLoaded, loading}) => {

	useEffect(() => {
		bookstoreService.getBooks()
			.then((data) => {
				booksLoaded(data)
			})
	}, [])

	if(loading) {
		return <Spinner />
	}

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

const mapStateToProps = (state) => {
	return {
		books: state.books,
		loading: state.loading
	}
}

const mapDispatchToProps = {
	booksLoaded
}

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList)