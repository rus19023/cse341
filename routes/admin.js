const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.ejs'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title, price: req.body.price, author: req.body.author, publish: req.body.published, desc: req.body.description });
  console.log(products);
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
