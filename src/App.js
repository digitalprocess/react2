import React, { Fragment, Component } from 'react'
import logo from './logo.svg'
import './App.css'

import {Modal} from 'Elements'
import {Toggle} from 'Utilities'
import User from './User'
import {UserContext} from './UserContext'
class UserProvider extends Component {
	state = {
		id: '123',
		name: 'Jon Snow',
		email: 'jon@wall.com',
	}

	logout = () => {
		this.setState({
			id: null,
			name: '',
			email: '',
		})
	}

	render() {
		return (
			<UserContext.Provider
				value={{
					user: this.state,
					logout: this.logout,
				}}>
				{this.props.children}
			</UserContext.Provider>
		)
	}
}

function App() {
	return (
		<UserProvider>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<User />
				<Toggle>
					{({ on, toggle }) => (
						<Fragment>
							<button onClick={toggle}>Login</button>
							<Modal on={on} toggle={toggle}>
								<h1>Still in a modal</h1>
							</Modal>
						</Fragment>
					)}
				</Toggle>
			</div>
		</UserProvider>
	)
}

export default App
