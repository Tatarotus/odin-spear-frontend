import { Component } from 'preact';

class Catcher extends Component {
	state = { errored: false };

	componentDidCatch(error) {
		this.setState({ errored: true, error });
	}

	render(props, state) {
		if (state.errored) {
			return <p>{this.state.error}</p>;
		}
		return props.children;
	}
}

export default Catcher;
