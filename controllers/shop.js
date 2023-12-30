const Product = require('../models/product');
const Chart = require('../models/charted');


exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/shop/products'
    });
  });
};

exports.getCart = (req, res, next) => {
  Chart.fetchAll(products => {
    res.render('shop/cart', {
      prods: products,
      pageTitle: 'Your Cart',
      path: '/shop/cart'
    });
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/shop/checkout',
    pageTitle: 'Checkout'
  });
};
