var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var PRODUCTS_FILE =  path.join(__dirname, 'products.json');

// SET PORT
app.set('port', (process.env.PORT || 3000));

// SET STATIC PATH
app.use(express.static(path.join(__dirname, 'client')));

// BODYPARSER MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// GET PRODUCTS
app.get('/api/products', function(req,res){
    fs.readFile(PRODUCTS_FILE, function(err, data){
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    })
})

// ADD PRODUCTS
app.post('/api/products', function(req,res){
    fs.readFile(PRODUCTS_FILE, function(err, data){
        
        var products = JSON.parse(data);
        products.push(req.body);
        
        fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 3), function(err){
            res.setHeader('Cache-Control', 'no-cache');
            res.json(products);
        })     
    })
})

// START SERVER
app.listen(app.get('port'), function(){
	console.log('Server has started on port: '+ app.get('port'));
});