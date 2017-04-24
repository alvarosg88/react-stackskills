var HelloMessage = React.createClass({
    sayMessage: function(){
        console.log(this.props.children)
    },
    render: function(){
        return <div>
                    <h3>Hello {this.props.word}</h3>
                    <a href="#" onClick={this.sayMessage}>Click for Message!</a>
               </div>;
    }
});

ReactDOM.render(
    <HelloMessage word="Everyone se guarda???!!!">This is React Shitposting</HelloMessage>,
    document.getElementById('HelloMessage')
);