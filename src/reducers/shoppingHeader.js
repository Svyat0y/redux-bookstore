const initialState = {
	headerCart: {
		totalOrdersInCart: 0,
		orderTotal: 0
	}
}

const updateOrdersInCart = (state, string) => {
	const { shoppingCart: { cartItems } } = state
	const total = []

	switch (string) {
		case 'TOTAL_ORDERS_IN_CART':
			cartItems.forEach(el => {
				total.push(el.count)
			})
			return {
				...state.headerCart,
				totalOrdersInCart: total.reduce((a, b) => a + b, 0)
			}

		case 'ORDER_TOTAL':
			cartItems.forEach(el => {
				total.push(el.total)
			})
			return {
				...state.headerCart,
				orderTotal: total.reduce((a, b) => a + b, 0)
			}

		default:
			return state
	}
}

const updateShoppingHeader = (state = initialState, action) => {

	switch (action.type) {

		case 'TOTAL_ORDERS_IN_CART':
			return updateOrdersInCart(state, 'TOTAL_ORDERS_IN_CART')

		case 'ORDER_TOTAL_IN_CART':
			return updateOrdersInCart(state, 'ORDER_TOTAL')

		default:
			return state.headerCart
	}
}

export default updateShoppingHeader