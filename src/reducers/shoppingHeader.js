const initialState = {
	totalOrdersInCart: 0
}

const getOrdersInCart = ({ shoppingCart: { cartItems } }) => {
	const counts = [];

	cartItems.forEach(el => {
		let count = el.count
		counts.push(count)
	})

	return counts.reduce((a, b) => a + b, 0)
}


const updateShoppingHeader = (state = initialState, action) => {
	switch (action.type) {

		case 'TOTAL_ORDERS_IN_CART':
			return getOrdersInCart(state)

		default:
			return state.totalOrdersInCart
	}
}

export default updateShoppingHeader