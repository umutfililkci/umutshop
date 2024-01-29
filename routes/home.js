const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {

    const products = require("../data/db").filter(x => x.isHome).slice(0, 6);

    bestPriceProducts = products.map(function (p) {
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
    
    res.render("home", { list: bestPriceProducts })
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/register", (req, res) => {
    res.render("register")
})
module.exports = router;