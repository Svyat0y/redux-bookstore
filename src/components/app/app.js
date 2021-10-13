import withBookstoreService from '../hoc'
import {Route, Switch } from 'react-router-dom';
import { CartPage, HomePage } from '../pages';
import ShopHeader from '../shop-header';


const App = () => {

	return (
		<main role='main' className='container'>
			<ShopHeader numItems={5} total={160} />
			<Switch>
				<Route
					exact path={'/'}
					render={HomePage}
				/>
				<Route
					path={'/cart'}
					component={CartPage}
				/>
				<Route
					path={'*'}
					render={() => 'not found'}/>
			</Switch>
		</main>
	)
}

export default withBookstoreService()(App)