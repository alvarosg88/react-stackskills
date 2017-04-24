var Nav = React.createClass({
    getInitialState: function(){
        return { current : 0 }
    },
    clicked: function(m,index){
        this.setState({ current: index })
        console.log(m)
    },
    render: function(){
        var self = this;
        return (
        
        <ul className="nav navbar-nav">
            
           {self.props.menuItems.map(function(m,index){
            
                var style = ( self.state.current == index ) ? "active" : "";
            
                return <li className={style} key={m.toString()}><a href="#" onClick={self.clicked.bind(self,m,index)}>{m}</a></li>
                
            })}
        
        </ul>
        
        )
    }
});

ReactDOM.render(
    <Nav menuItems={['Home','About','Services','Contact']}/>,
    document.getElementById('nav')
);