const express = require("express")
const router = express.Router();

router.get("/products/:id", (req, res) => {

    let products = require("../data/db");
    let product = products.find(x => x.id == req.params.id)
    res.render("product-detail", { product: product })
})

router.get("/products", (req, res) => {

    const pageCount = 6;
    let products = require("../data/db");
    let page = req.query.page ?? 1;
    let start = 0;
    let totalPage = 1;

    // Distinct => https://selimatac.medium.com/javascript-ile-array-distinct-cb66bfbf97e0
    let categories = [...new Set(products.map(p => p.category))];

    if (req.query != null && req.query != undefined && req.query != {}) {
        if (req.query.category) {
            products = products.filter(x => x.category == req.query.category);
        }
        if (req.query.minprice) {
            products = products.filter(x => x.prices.some(x => x.price >= req.query.minprice));
        }
        if (req.query.maxprice) {
            products = products.filter(x => x.prices.some(x => x.price <= req.query.maxprice));
        }
        if (req.query.page) {
            start = (req.query.page - 1) * pageCount;
        }

        totalPage = Math.ceil(products.length / pageCount);
        let end = start + pageCount;
        products = products.slice(start, end);
    }

    products = products.map(function (p) {
        return {
            id: p.id,
            category: p.category,
            name: p.name,
            image: p.image,
            provider: p.prices.sort((a, b) => a.price - b.price).at(0).provider,
            price: p.prices.sort((a, b) => a.price - b.price).at(0).price,
            providerImage: p.prices.sort((a, b) => a.price - b.price).at(0).image
        }
    });
    res.render("categories", { products: products, categories: categories, pageInfo: { page, totalPage, params: req.url } })
})

router.get("/product-match", (req, res) => {
    let products = require("../data/db");
    let matchProducts = req.query.products.split(",");
    products = products.filter(x => matchProducts.some(s => x.id == s));
    res.render("product-match", { products: products })
})

module.exports = router;