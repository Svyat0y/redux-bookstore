import './shop-header.css'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';


const ShopHeader = ({numItems, total}) => {
	return (
		<header className='shop-header'>
			<NavLink to='/'>
				<div className='logo'>ReStore</div>
			</NavLink>
			<div className='shopping-cart'>
				<NavLink to='/cart'>
					<FontAwesomeIcon className='cart-icon' icon='shopping-cart' />
					{numItems} items (${total})
				</NavLink>
			</div>
		</header>
	)
}

export default ShopHeader