import './shop-header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTotalOrdersInCart } from '../../actions';
import { useEffect } from 'react';


const ShopHeader = ({ totalOrdersInCart, getTotalOrdersInCart, cartItems }) => {

	useEffect(() => {
		getTotalOrdersInCart();
	}, [ cartItems ])

	return (
		<header className='shop-header'>
			<NavLink to='/'>
				<div className='logo'>ReStore</div>
			</NavLink>
			<div className='shopping-cart'>
				<NavLink to='/cart'>
					<FontAwesomeIcon className='cart-icon' icon='shopping-cart'/>
					{ totalOrdersInCart } items (${ 52 })
				</NavLink>
			</div>
		</header>
	)
}

const mapStateToProps = (state) => {
	return {
		totalOrdersInCart: state.totalOrdersInCart,
		cartItems: state.shoppingCart.cartItems
	}
}

const mapDispatchToProps = {
	getTotalOrdersInCart
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader)