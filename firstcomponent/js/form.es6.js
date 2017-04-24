var AlertBox = React.createClass({
    render: function(){
        return <div className={"alert alert-"+this.props.type}>{this.props.children}</div>;
    }
});

var RegForm = React.createClass({
    getInitialState: function(){
        return {
            showAlert:  false
        }
    },
    register: function(e){
        e.preventDefault();
        var firstName = this.refs.firstName.value.trim();
        var lastName = this.refs.lastName.value.trim();
        var email = this.refs.email.value.trim();
        
        if ( !firstName || !lastName || !email ){
            this.setState({showAlert:true});
            return;
        }

        this.setState({showAlert:false});
        console.log(firstName)
        console.log(lastName)
        console.log(email)
    },
    render: function(){
        return <form onSubmit={this.register}>
                    {this.state.showAlert ? <AlertBox type="danger">Please submit all fields a**hole!!</AlertBox> : null }
        
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" className="form-control" placeholder="First Name" ref="firstName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" className="form-control" placeholder="Last Name" ref="lastName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" className="form-control" placeholder="E-mail" ref="email"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-block" value="Submit"/>
                    </div>
               </form>;
    }
});

ReactDOM.render(
    <RegForm/>,
    document.getElementById('regform')
);