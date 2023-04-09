const { v4: uuidv4 } = require("uuid")
const Products = require("../data/products.json")
const { writeToFile } = require("../utils")

async function getAll() {
    return new Promise((resolve, reject) => {
        resolve(Products)
    })
}

async function getById(id) {
    return new Promise((resolve, reject) => {
        resolve(Products.find(item => item.id === id))
    })
}

async function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = { id: uuidv4(), ...product }
        Products.push(newProduct)
        writeToFile("./data/products.json", Products)
        resolve(newProduct)
    })
}

module.exports = { getAll, getById, create }