const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, 'views'))

//habilitar arquivos estaticos(public)
server.use(express.static("public"))


//use req.body
server.use(express.urlencoded({ extended: true }))

//routes
server.use(routes)



server.listen(3000 , () => console.log("running"))