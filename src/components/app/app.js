import withBookstoreService from '../hoc'
import {Route, Switch } from 'react-router-dom';
import { CartPage, HomePage } from '../pages';

const App = () => {

	return (
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
	)
}

export default withBookstoreService()(App)