import { Route, Switch } from 'react-router-dom'

import withBookstoreService from '../hoc'
import ShopHeader from '../shop-header'
import { CartPage, HomePage } from '../pages'


const App = () => {

	return (
		<main role='main' className='container'>
			<ShopHeader/>
			<Switch>
				<Route
					exact path='/'
					render={ HomePage }
				/>
				<Route
					path='/cart'
					component={ CartPage }
				/>
				<Route
					path='*'
					render={ () => 'not found' }/>
			</Switch>
		</main>
	)
}

export default withBookstoreService()(App)