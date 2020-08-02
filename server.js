const express = require('express')

const rotas = require('./rotas')

const methodo = require('method-override')

const nunjucks = require('nunjucks')
        
const server = express()


server.use(express.urlencoded({extended:true}))
server.use(methodo('_method'))
server.use(rotas)

server.use(express.static('public'))

server.set('view engine',"njk")




nunjucks.configure('views',{
    express:server,
    autoescape:false,
    noCache:true
})


server.listen(8080)