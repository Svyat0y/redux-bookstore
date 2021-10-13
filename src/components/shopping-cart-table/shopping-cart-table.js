import './shopping-cart-table.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ShoppingCartTable = () => {
	return (
		<div className='shopping-cart-table'>
			<h2>Your Order</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
				<tr>
					<td>1</td>
					<td>Site Reliability Engineering</td>
					<td>2</td>
					<td>$40</td>
					<td>
						<button className="btn btn-outline-danger btn-sm float-right">
							<FontAwesomeIcon icon='trash' />
						</button>
						<button className="btn btn-outline-success btn-sm float-right">
							<FontAwesomeIcon icon='plus' />
						</button>
						<button className="btn btn-outline-warning btn-sm float-right">
							<FontAwesomeIcon icon='minus' />
						</button>
					</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Site Reliability Engineering</td>
					<td>2</td>
					<td>$40</td>
					<td>
						<button className="btn btn-outline-danger btn-sm float-right">
							<FontAwesomeIcon icon='trash' />
						</button>
						<button className="btn btn-outline-success btn-sm float-right">
							<FontAwesomeIcon icon='plus' />
						</button>
						<button className="btn btn-outline-warning btn-sm float-right">
							<FontAwesomeIcon icon='minus' />
						</button>
					</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Site Reliability Engineering</td>
					<td>2</td>
					<td>$40</td>
					<td>
						<button className="btn btn-outline-danger btn-sm float-right">
							<FontAwesomeIcon icon='trash' />
						</button>
						<button className="btn btn-outline-success btn-sm float-right">
							<FontAwesomeIcon icon='plus' />
						</button>
						<button className="btn btn-outline-warning btn-sm float-right">
							<FontAwesomeIcon icon='minus' />
						</button>
					</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Site Reliability Engineering</td>
					<td>2</td>
					<td>$40</td>
					<td>
						<button className="btn btn-outline-danger btn-sm float-right">
							<FontAwesomeIcon icon='trash' />
						</button>
						<button className="btn btn-outline-success btn-sm float-right">
							<FontAwesomeIcon icon='plus' />
						</button>
						<button className="btn btn-outline-warning btn-sm float-right">
							<FontAwesomeIcon icon='minus' />
						</button>
					</td>
				</tr>
				</tbody>
			</table>

			<div className="total">
				Total: $160
			</div>
		</div>
	)
}

export default ShoppingCartTable