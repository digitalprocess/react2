import React, { Component } from 'react'
import { UserContext } from './UserContext'

export default class User extends Component {
	render() {
		return (
			<UserContext.Consumer>
				{context => (
					<div>
						<h1>User Info</h1>
						<h2>{context.user.name}</h2>
						<p>{context.user.email}</p>
						<button onClick={context.logout}>Logout</button>
					</div>
				)}
			</UserContext.Consumer>
		)
	}
}
