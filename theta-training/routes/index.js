var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
require('marko/node-require').install()
require('marko/express')
let Book = require('../models/Book')
var indexTemplate = require('../views/index.marko')


// Busca a página e carrega os livros
router.get('/', (req, res) => {
    console.log("Exibindo a Home!")
    if(mongoose.connection.readyState){
        Book.find({}).then((books) => {
            res.marko(indexTemplate, {books: books})
        })
    }else{
        res.marko(indexTemplate)
    }
})

// Send nos arquivos
router.get('/theta-enviar', (req,res) => {
    let livros = [
        new Book({
            name: "test application", 
            price: "R$999,99", 
            description: "...", 
            cover: "ezops.png"
        }),
        new Book(
        {
            name: "test application", 
            price: "R$999,99", 
            description: "...", 
            cover: "ezops.png"
        }),
         new Book({
            name: "test application", 
            price: "R$999,99", 
            description: "...", 
            cover: "ezops.png"
        }),
        new Book({
            name: "test application", 
            price: "R$999,99", 
            description: "...", 
            cover: "ezops.png"
        }),
        new Book({
            name: "test application", 
            price: "R$999,99", 
            description: "...",  
            cover: "ezops.png"
        }),
        new Book({
            name: "test application", 
            price: "R$999,99", 
            description: "...",  
            cover: "ezops.png"
        }),
        new Book({
            name: "test application", 
            price: "R$999,99", 
            description: "...",  
            cover: "ezops.png"
        }),
        new Book(
        {
            name: "test application", 
            price: "R$999,99", 
            description: "...", 
            cover: "ezops.png"
        })

    ]
                    
    Book.insertMany(livros).then(moogoseDocuments => {
        console.log(moogoseDocuments, "Ok!")
    }).catch(err => {
        console.log(err)
    })  
    res.send("Já foi enviado, volta pra home!");
    
})

module.exports = router;