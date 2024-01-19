const express = require("express")
const app = express();
const homeRouter = require("./routes/home")
const productRouter = require("./routes/product")

app.set("view engine", "ejs")
app.use(express.static("public"))

app.use(productRouter)
app.use(homeRouter)

app.listen(3002, () => console.log("3002 port aktif, başladı"))