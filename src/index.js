import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundry from './components/error-boundry'
import { BookstoreServiceProvider } from './components/bookstore-service-context'
import { bookstoreService } from './services';
import store from './store'
import App from './components/app'

import './assets/fontAwesomeIcons'


ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<BookstoreServiceProvider value={bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookstoreServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
)

