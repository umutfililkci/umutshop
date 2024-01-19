const express = require("express")
const router = express.Router();

router.get("/products/:id", (req, res) => {

    let products = require("../data/db");
    let product = products.find(x => x.id == req.params.id)
    res.render("product-detail", { list: product })
})

router.get("/products", (req, res) => {

    let products = require("../data/db");

    if (req.query != null && req.query != undefined && req.query != {}) {
        if (req.query.category) {
            products = products.filter(x => x.category == req.query.category);
        }
        else if (req.query.minprice) {
            products = products.filter(x => x.prices.some(x => x.price >= req.query.minprice));
        }
        else if (req.query.maxprice) {
            products = products.filter(x => x.prices.some(x => x.price <= req.query.maxprice));
        }
        else if (req.query.page) {
            let start = req.query.page - 1;
            products = products.slice(start * 10, 10);
        }
    }

    res.render("categories", { list: products })
})

module.exports = router;