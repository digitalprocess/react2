import React from 'react'

class Toggle extends React.Component {
	state = {
		on: false,
	}

	toggle = () => {
		this.setState({
			on: !this.state.on
		})
	}

	render() {
		return (
			<React.Fragment>
				<button onClick={this.toggle} style={{margin: '1rem', fontSize: '2rem'}}>Show/Hide</button>
				{this.state.on && this.props.children}
			</React.Fragment>
		)
	}
}

export default Toggle