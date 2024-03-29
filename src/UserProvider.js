import React, { Component } from 'react'
import { UserContext } from './UserContext'

export default class UserProvider extends Component {
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
