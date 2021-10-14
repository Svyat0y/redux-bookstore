import './shopping-cart-table.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';


const ShoppingCartTable = ({ items, orderTotal, onDecrease, onIncrease, onDelete }) => {

	const renderRow = (item, idx) => {
		const { id, title, count, total } = item
		return (
			<tr key={ id }>
				<td>{ idx + 1 }</td>
				<td>{ title }</td>
				<td>{ count }</td>
				<td>${ total }</td>
				<td>
					<button onClick={ () => onDecrease(id) } className="btn btn-outline-warning btn-sm float-right">
						<FontAwesomeIcon icon='minus'/>
					</button>
					<button onClick={ () => onIncrease(id) } className="btn btn-outline-success btn-sm float-right">
						<FontAwesomeIcon icon='plus'/>
					</button>
					<button onClick={ () => onDelete(id) } className="btn btn-outline-danger btn-sm float-right">
						<FontAwesomeIcon icon='trash'/>
					</button>
				</td>
			</tr>
		)
	}

	return (
		<div className='shopping-cart-table'>
			<h2>Your Order</h2>
			<table className="table">
				<thead>
				<tr>
					<th>#</th>
					<th>Item</th>
					<th>Count</th>
					<th>Total</th>
					<th>Action</th>
				</tr>
				</thead>
				<tbody>
				{ items.map(renderRow) }
				</tbody>
			</table>

			<div className="total">
				Total: ${ orderTotal }
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		items: state.cartItems,
		orderTotal: state.orderTotal
	}
}

const mapDispatchToProps = () => {
	return {
		onIncrease: (id) => console.log('increase', id),
		onDecrease: (id) => console.log('decrease', id),
		onDelete: (id) => console.log('delete', id)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)