/* Generated by Babel */
'use strict';

var Products = createReactClass({
    handleProductSubmit: function handleProductSubmit(product) {

        var products = this.state.productData;
        var newProducts = products.concat(product);
        this.setState({ productData: newProducts });

        $.ajax({
            url: this.state.url,
            type: 'POST',
            dataType: "json",
            //contentType: "application/json; charset=utf-8",
            data: product,
            success: (function (data) {
                console.log(data);
                this.setState({ productData: data });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error('ERROR EN LA PETICIÓN');
                console.error(xhr);
                console.error(status);
                console.error(err);
            }).bind(this)
        });
    },
    loadProductData: function loadProductData() {
        $.ajax({
            url: this.state.url,
            //type: 'post',
            dataType: "json",
            //contentType: "application/json; charset=utf-8",
            //data: JSON.stringify(json_submit),
            success: (function (data) {
                console.log(data);
                this.setState({ productData: data });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error('ERROR EN LA PETICIÓN');
                console.error(xhr);
                console.error(status);
                console.error(err);
            }).bind(this)
        });
    },
    getDefaultProps: function getDefaultProps() {
        return {
            interval: 2000
        };
    },
    getInitialState: function getInitialState() {
        return {
            productData: [],
            url: "api/products"
        };
    },
    componentDidMount: function componentDidMount() {
        this.loadProductData();
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-md-6' },
                React.createElement(ProductForm, { onProductSubmit: this.handleProductSubmit })
            ),
            React.createElement(
                'div',
                { className: 'col-md-6' },
                React.createElement(
                    'h1',
                    null,
                    'Products'
                ),
                React.createElement('hr', null),
                React.createElement(ProductList, { productData: this.state.productData })
            )
        );
    }
});

var ProductForm = createReactClass({
    handleSubmit: function handleSubmit(evt) {
        evt.preventDefault();
        var sendProduct = {
            id: this.refs.pid.value.trim(),
            name: this.refs.pname.value.trim(),
            description: this.refs.desc.value.trim(),
            price: this.refs.price.value.trim(),
            buy_url: this.refs.buyurl.value.trim(),
            image_url: this.refs.imgurl.value.trim()
        };

        if (!sendProduct.id || !sendProduct.name) {
            console.warn('Fields required!!!');
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
    render: function render() {
        return React.createElement(
            'div',
            { className: 'floating-form' },
            React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'h3',
                        null,
                        'Add Product'
                    ),
                    React.createElement('hr', null)
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        null,
                        'Product ID'
                    ),
                    React.createElement('input', { type: 'number', className: 'form-control', name: 'pid', ref: 'pid', placeholder: 'Product ID' })
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        null,
                        'Product name'
                    ),
                    React.createElement('input', { type: 'text', className: 'form-control', name: 'pname', ref: 'pname', placeholder: 'Product Name' })
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        null,
                        'Description'
                    ),
                    React.createElement('textarea', { type: 'text', className: 'form-control', name: 'desc', ref: 'desc', placeholder: 'Description', rows: '3' })
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        null,
                        'Price'
                    ),
                    React.createElement('input', { type: 'number', className: 'form-control', name: 'price', ref: 'price', placeholder: 'Price' })
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        null,
                        'Buy URL'
                    ),
                    React.createElement('input', { type: 'text', className: 'form-control', name: 'buyurl', ref: 'buyurl', placeholder: 'Buy URL' })
                ),
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        null,
                        'Image URL'
                    ),
                    React.createElement('input', { type: 'text', className: 'form-control', name: 'imgurl', ref: 'imgurl', placeholder: 'Image URL' })
                ),
                React.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary btn-block' },
                    'Submit'
                )
            )
        );
    }
});

var ProductList = createReactClass({

    render: function render() {
        var productList = this.props.productData.map(function (product, index) {
            var productFields = {
                id: product.id,
                name: product.name,
                desc: product.description,
                price: product.price,
                buy_url: product.buy_url,
                img: product.image_url
            };
            return React.createElement(Product, { productFields: productFields, key: productFields.id });
        });
        return React.createElement(
            'div',
            null,
            productList
        );
    }
});

var Product = createReactClass({

    render: function render() {
        var product = this.props.productFields;
        return React.createElement(
            'ul',
            { className: 'list-group' },
            React.createElement(
                'li',
                { className: 'list-group-item active' },
                React.createElement(
                    'h4',
                    null,
                    product.name,
                    React.createElement(
                        'span',
                        { className: 'pull-right' },
                        product.price,
                        '$'
                    )
                )
            ),
            React.createElement(
                'li',
                { className: 'list-group-item text-center' },
                React.createElement('img', { src: product.img, className: 'img-responsive' })
            ),
            React.createElement(
                'li',
                { className: 'list-group-item' },
                product.desc
            ),
            React.createElement(
                'a',
                { href: product.buy_url, target: '_blank', className: 'list-group-item text-center' },
                'ADD TO CART'
            )
        );
    }
});

ReactDOM.render(React.createElement(Products, null), document.getElementById('products'));