/* Generated by Babel */
'use strict';

var MyComponent = React.createClass({
	displayName: 'MyComponent',

	getDefaultProps: function getDefaultProps() {
		console.log('Invoking the getDefaultProps method');
		return {
			myProp: "Foo"
		};
	},
	getInitialState: function getInitialState() {
		console.log('Invoking the getInitialState method');
		return {
			something: 0
		};
	},
	componentWillMount: function componentWillMount() {
		console.log('Invoking the componentWillMount method');
	},
	componentDidMount: function componentDidMount() {
		console.log('Invoking the componentDidMount method');
		console.log(this.props.myProp);
	},
	render: function render() {
		console.log('Invoking render');
		console.log(this.state.something);
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				this.props.myProp + ' ' + this.props.children
			),
			React.createElement(
				'button',
				{ onClick: this.removeHandler },
				'Unmount'
			),
			React.createElement(
				'button',
				{ onClick: this.addNew },
				'Reset'
			)
		);
	},
	addNew: function addNew() {
		this.setState({ something: this.state.something++ });
	},
	ComponentWillReceiveProps: function ComponentWillReceiveProps() {
		console.log('Invoking the ComponentWillReceiveProps method');
	},
	shouldComponentUpdate: function shouldComponentUpdate() {
		console.log('Invoking the shouldComponentUpdate method');

		return true;
	},
	ComponentWillUpdate: function ComponentWillUpdate() {
		console.log('Invoking the ComponentWillUpdate method');
	},
	ComponentDidUpdate: function ComponentDidUpdate() {
		console.log('Invoking the ComponentDidUpdate method');
	},
	ComponentWillUnmount: function ComponentWillUnmount() {
		console.log('Invoking the ComponentWillUnmount method');
	},
	removeHandler: function removeHandler() {
		console.log("y voló, y la moto se fue a la puta");
		ReactDOM.unmountComponentAtNode(document.getElementById('container'));
	}
});

ReactDOM.render(React.createElement(
	MyComponent,
	{ myProp: 'Barrrr' },
	'Qué pasaaaaaaaa'
), document.querySelector('.container1'));

ReactDOM.render(React.createElement(
	MyComponent,
	{ myProp: 'Barrrr' },
	'Qué pasaaaaaaaa'
), document.querySelector('.container2'));

ReactDOM.render(React.createElement(
	MyComponent,
	{ myProp: 'Barrrr' },
	'Qué pasaaaaaaaa'
), document.querySelector('.container3'));