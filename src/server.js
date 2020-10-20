//importar libs
const express = require('express');
const path = require('path');
const pages = require('./pages.js')


//iniciando o express
const server = express();


//criar um rota
server


//utilizar body no req

.use(express.urlencoded({extended:true}))
//utilizando arquivos estáticos /public/
    .use(express.static('public'))

    // configurar template engine

    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)


// ligar o server
server.listen(5500)
