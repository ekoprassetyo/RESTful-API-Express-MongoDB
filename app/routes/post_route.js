/*
    * Parameter app diisikan object yang sudah didefiniskan di app.js
    * Router menampung method router yang ada pada library express
*/

module.exports = (app) => {
    const posts = require('../controllers/post_controller')
    const router = require('express').Router()

    router.get('/posts', posts.findAll)
    router.post('/post', posts.create)
    router.get('/post/:id', posts.findOne)
    router.put('/post/:id', posts.update)
    router.delete('/post/:id', posts.delete)

    app.use('/api/', router)
}