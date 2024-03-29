import React, { Fragment } from 'react'
import logo from './logo.svg'
import './App.css'

import User from './User'
import UserProvider from './UserProvider'

import { Modal } from 'Elements'
import { Toggle } from 'Utilities'

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
