import updateBookList from './bookList';
import updateShoppingCart from './shoppingCart';

const reducer = (state, action) => {
	console.log(state)

	// case 'FETCH_BOOKS_REQUEST':
	// 	return {
	// 		...state,
	// 		books: [],
	// 		loading: true,
	// 		error: null
	// 	}
	//
	// case 'FETCH_BOOKS_SUCCESS':
	// 	return {
	// 		...state,
	// 		books: action.payload,
	// 		loading: false,
	// 		error: null
	// 	}
	//
	// case 'FETCH_BOOKS_FAILURE':
	// 	return {
	// 		...state,
	// 		books: [],
	// 		loading: false,
	// 		error: action.payload
	// 	}

	// case 'BOOK_ADDED_TO_CART':
	// 	return updateOrder(state, action.payload, 1)
	//
	// case 'BOOK_REMOVED_FROM_CART':
	// 	return updateOrder(state, action.payload, -1)
	//
	// case 'ALL_BOOKS_REMOVED_FROM_CART':
	// 	const item = state.cartItems.find(({ id }) => id === action.payload)
	// 	return updateOrder(state, action.payload, -item.count)

	return {
		bookList: updateBookList(state, action),
		shoppingCart: updateShoppingCart(state, action)
	}
}

export default reducer