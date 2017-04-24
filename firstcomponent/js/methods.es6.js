var MyComponent = React.createClass({
			getDefaultProps: function(){
				console.log('Invoking the getDefaultProps method');
				return{
					myProp:"Foo"
				};
			},
			getInitialState: function(){
				console.log('Invoking the getInitialState method');
				return {
                    something: 0
                };
			},
			componentWillMount: function(){
				console.log('Invoking the componentWillMount method');
			},
			componentDidMount: function(){
				console.log('Invoking the componentDidMount method');
                console.log(this.props.myProp)
			},
			render: function(){
				console.log('Invoking render');
                console.log(this.state.something)
				return(
						<div>
							<h1>{this.props.myProp + ' ' +this.props.children}</h1>
							<button onClick={this.removeHandler}>Unmount</button>
                            <button onClick={this.addNew}>Reset</button>
						</div>
					)
			},
            addNew: function(){
                this.setState({something: this.state.something++ });
            },
			ComponentWillReceiveProps: function(){
				console.log('Invoking the ComponentWillReceiveProps method');
			},
			shouldComponentUpdate: function(){
				console.log('Invoking the shouldComponentUpdate method');
                
				return true;
			},
			ComponentWillUpdate: function(){
				console.log('Invoking the ComponentWillUpdate method');
			},
			ComponentDidUpdate: function(){
				console.log('Invoking the ComponentDidUpdate method');
			},
			ComponentWillUnmount: function(){
				console.log('Invoking the ComponentWillUnmount method');
			},
			removeHandler: function(){
                console.log("y voló, y la moto se fue a la puta")
				ReactDOM.unmountComponentAtNode(document.getElementById('container'));
			}
		});

		ReactDOM.render(
				<MyComponent myProp="Barrrr">Qué pasaaaaaaaa</MyComponent>,
				document.querySelector('.container1')       
			);

ReactDOM.render(
				<MyComponent myProp="Barrrr">Qué pasaaaaaaaa</MyComponent>,
				document.querySelector('.container2')       
			);

ReactDOM.render(
				<MyComponent myProp="Barrrr">Qué pasaaaaaaaa</MyComponent>,
				document.querySelector('.container3')       
			);