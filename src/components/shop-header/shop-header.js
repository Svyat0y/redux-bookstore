import './shop-header.css'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

import { getOrderTotal, getTotalOrdersInCart } from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ShopHeader = ({ totalOrdersInCart, getTotalOrdersInCart, orderTotal, cartItems, getOrderTotal }) => {

	useEffect(() => {
		getTotalOrdersInCart()
		getOrderTotal()
	}, [ cartItems ])

	return (
		<header className='shop-header'>
			<NavLink to='/'>
				<div className='logo'>ReStore</div>
			</NavLink>
			<div className='shopping-cart'>
				<NavLink to='/cart'>
					<FontAwesomeIcon className='cart-icon' icon='shopping-cart'/>
					{ totalOrdersInCart } items (${ orderTotal })
				</NavLink>
			</div>
		</header>
	)
}

const mapStateToProps = (state) => {
	return {
		totalOrdersInCart: state.headerCart.totalOrdersInCart,
		cartItems: state.shoppingCart.cartItems,
		orderTotal: state.headerCart.orderTotal
	}
}

const mapDispatchToProps = {
	getTotalOrdersInCart,
	getOrderTotal
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader)