/*
    * File Controller ini digunakan untuk membuat CRUD
    * Jika di Golang controller ini adalah handler
    * Maka dari itu kita harus import models dan juga import db.posts yang ada didalam models
*/

const db = require('../models')
const Post = db.posts

exports.findAll = (req, res) => {
    Post.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error while retrieving posts."
        })
    });
}

exports.create = (req, res) => {
    const post = new Post({
        tittle: req.body.title,
        body: req.body.body,
        published: req.body.published ? req.body.published : false
    })

    // error 409 adalah kita tidak berhasil atau tidak dapat memproses request yang dikirim oleh user/client
    post.save(post)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while create posts."

        })
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Post.findById(id) 
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while whow post."

        })
    });
}

exports.update = (req, res) => {
    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body)
    .then((result) => {
        if (!result) {
            res.status(404).send({
                message: "Post not found"
            })
        }
        res.send({
            message: "Post was updated"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while updating post"
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    Post.findByIdAndRemove(id)
    .then((result) => {
        if(!result) {
            res.status(404).send({
                message : "Post not found"
            })
        }

        res.send({
            message: "Post succesfully deleted"
        })
        
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while deleting post"
        })
    });
}