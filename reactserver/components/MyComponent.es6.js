var React = require('react');
var ReactDOMServer = require('react-dom/server');
var createReactClass = require('create-react-class');

var MyComponent = createReactClass({
    render: function(){
        return (
        
            <div>
                <h1>React Component on Server</h1>
                <p>Yes, it is happening!!!</p>
            </div>
            
        );
    }
});

module.exports.MyComponent = MyComponent;