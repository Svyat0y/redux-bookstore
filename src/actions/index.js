const booksRequested = () => {
	return {
		type: 'FETCH_BOOKS_REQUEST'
	}
}

const booksLoaded = (newBooks) => {
	return {
		type: 'FETCH_BOOKS_SUCCESS',
		payload: newBooks
	}
}

const booksError = (error) => {
	return {
		type: 'FETCH_BOOKS_FAILURE',
		payload: error
	}
}

export const bookAddedToCart = (bookId) => {
	return {
		type: 'BOOK_ADDED_TO_CART',
		payload: bookId
	}
}

export const bookRemovedFromCart = (bookId) => {
	return {
		type: 'BOOK_REMOVED_FROM_CART',
		payload: bookId
	}
}

export const allBooksRemovedFromCart = (bookId) => {
	return {
		type: 'ALL_BOOKS_REMOVED_FROM_CART',
		payload: bookId
	}
}

export const getTotalOrdersInCart = () => {
	return {
		type: 'TOTAL_ORDERS_IN_CART'
	}
}

export const getOrderTotal = () => {
	return {
		type: 'ORDER_TOTAL_IN_CART'
	}
}

export const fetchBooks = (dispatch, bookstoreService) => () => {
	dispatch(booksRequested())
	bookstoreService.getBooks()
		.then((data) => dispatch(booksLoaded(data)))
		.catch((err) => dispatch(booksError(err)))
}