const express = require('express');

const app = express();

let products = [];

//middleware to read the body of request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//handle request
app.get('/products', (req, res, next) => {
    //console.log('request url:', req.url);
    res.send(products);
});



//add product
app.post('/product', (req, res, next) => {
    console.log(req.body)
    products.push(req.body);
    res.send(products)
});


//delete product
app.delete('/product/:name', (req, res, next) => {
    products = products.filter((prod) => { return prod.name !== req.params.name });
    res.send(products);
})



//update product
app.put('/product/:name', (req, res, next) => {
    products.map((prod) => {
        if (prod.name === req.params.name) {
            prod.price = req.body.price
        }
    });

    res.send(products)
})

const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log('server up and running on port:',port)});