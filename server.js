const http = require("http")
const products = require("./data/products.json")

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.write(
        "<h1>Hello</h1>"
    )
    res.end()
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`server started listening at port ${PORT}`);
})