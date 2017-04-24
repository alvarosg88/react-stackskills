var Products = createReactClass({
    handleProductSubmit: function( product ){
        
        var products = this.state.productData;
        var newProducts = products.concat(product);
        this.setState({ productData : newProducts });
        
        $.ajax({
		        url: this.state.url,
		        type: 'POST',
		        dataType: "json",
		        //contentType: "application/json; charset=utf-8",
		        data: product,
		        success: function (data) {
		        	console.log(data)
                    this.setState({ productData : data });
		        }.bind(this),
                error: function (xhr, status, err) {
		        	console.error('ERROR EN LA PETICIÓN')
                    console.error(xhr)
                    console.error(status)
                    console.error(err)
		        }.bind(this)
	    });
    },
    loadProductData: function(){
        $.ajax({
		        url: this.state.url,
		        //type: 'post',
		        dataType: "json",
		        //contentType: "application/json; charset=utf-8",
		        //data: JSON.stringify(json_submit),
		        success: function (data) {
		        	console.log(data)
                    this.setState({ productData : data });
		        }.bind(this),
                error: function (xhr, status, err) {
		        	console.error('ERROR EN LA PETICIÓN')
                    console.error(xhr)
                    console.error(status)
                    console.error(err)
		        }.bind(this)
	   });
    },
    getDefaultProps: function(){
        return {
            interval : 2000
        };
    },
    getInitialState: function(){
        return {
            productData : [],
            url : "api/products"
        };
    },
    componentDidMount: function(){
        this.loadProductData();
    },
    render: function(){
        return (
        
            <div className="row">
                <div className="col-md-6">
                    <ProductForm onProductSubmit={this.handleProductSubmit}/>
                </div>

                <div className="col-md-6">
                    <h1>Products</h1>
                    <hr/>
                    <ProductList productData={this.state.productData}/>
                </div>
            </div>
            
        );
    }
});

var ProductForm = createReactClass({
    handleSubmit: function( evt ) {
        evt.preventDefault();
        var sendProduct = {
            id       :    this.refs.pid.value.trim(),
            name     :    this.refs.pname.value.trim(),
            description    :    this.refs.desc.value.trim(),
            price    :    this.refs.price.value.trim(),
            buy_url  :    this.refs.buyurl.value.trim(),
            image_url  :    this.refs.imgurl.value.trim()
        };
        
        if ( !sendProduct.id || !sendProduct.name ){
            console.warn('Fields required!!!')
            return;
        }
         
        this.props.onProductSubmit(sendProduct);
        this.refs.pid.value = '';
        this.refs.pname.value = '';
        this.refs.desc.value = '';
        this.refs.price.value = '';
        this.refs.buyurl.value = '';
        this.refs.imgurl.value = '';
    },
    render: function(){
        return (
        
            <div className="floating-form">
                <form onSubmit={this.handleSubmit}>
            
                  <div className="form-group">
                    <h3>Add Product</h3>
                    <hr/>
                  </div>
            
                  <div className="form-group">
                    <label>Product ID</label>
                    <input type="number" className="form-control" name="pid" ref="pid" placeholder="Product ID"/>
                  </div>
                    
                  <div className="form-group">
                    <label>Product name</label>
                    <input type="text" className="form-control" name="pname" ref="pname" placeholder="Product Name"/>
                  </div>
            
                  <div className="form-group">
                    <label>Description</label>
                    <textarea type="text" className="form-control" name="desc" ref="desc" placeholder="Description" rows="3"></textarea>
                  </div>
            
                  <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" name="price" ref="price" placeholder="Price"/>
                  </div>
            
                  <div className="form-group">
                    <label>Buy URL</label>
                    <input type="text" className="form-control" name="buyurl" ref="buyurl" placeholder="Buy URL"/>
                  </div>
            
                  <div className="form-group">
                    <label>Image URL</label>
                    <input type="text" className="form-control" name="imgurl" ref="imgurl" placeholder="Image URL"/>
                  </div>
            
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
            
        );
    }
});

var ProductList = createReactClass({
    
    render: function(){
        var productList = this.props.productData.map(function( product, index ){
            var productFields = {
                id      :   product.id,
                name    :   product.name,
                desc    :   product.description,
                price   :   product.price,
                buy_url :   product.buy_url,
                img     :   product.image_url
            }
            return (
                <Product productFields={productFields} key={productFields.id}/>
            );
        })
        return (
        
            <div>
                { productList }
            </div>
            
        );
    }
});

var Product = createReactClass({
    
    render: function(){
        var product = this.props.productFields;
        return (
        
            <ul className="list-group">
              <li className="list-group-item active">
                <h4>{product.name}
                    <span className="pull-right">{product.price}$</span>
                </h4>
              </li>
              <li className="list-group-item text-center"><img src={product.img} className="img-responsive"/></li>
              <li className="list-group-item">{product.desc}</li>
              
                <a href={product.buy_url} target="_blank" className="list-group-item text-center">ADD TO CART</a>
              
            </ul>
            
        );
    }
});

ReactDOM.render(
    <Products />,
    document.getElementById('products')
);