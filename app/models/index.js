// Import db_config ditampung pada variable dbConfig
const dbConfig = require('../../config/db_config')

/* 
    * Membuat object untuk mongoose dimana mongoose ini adalah library
    * Yang digunakan untuk object modelling dari suatu collection atau dokumen yang ada di mangoDB
*/
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.posts = require('./post_model')(mongoose)

module.exports = db