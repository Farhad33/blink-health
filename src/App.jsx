import { Provider } from 'react-redux'
import Router from './components/Router.jsx'
import { store } from './store'

export default function App() {
	return (
    <Provider store={store}>
      <Router />
    </Provider>
	)
}