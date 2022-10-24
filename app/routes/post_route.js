/*
    * Parameter app diisikan object yang sudah didefiniskan di app.js
    * Pada variable router menampung method/function router yang ada pada library express
*/

const posts = require('../controllers/post_controller')
const router = require('express').Router()

module.exports = (app) => {

    router.get('/posts', posts.findAll)
    router.post('/post', posts.create)
    router.get('/post/:id', posts.findOne)
    router.put('/post/:id', posts.update)
    router.delete('/post/:id', posts.delete)

    app.use('/api/', router)
}