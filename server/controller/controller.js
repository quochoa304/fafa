var Userdb = require('../model/model');
const express =
    exports.create = (req, res) => {
        if (!req.body) {
            res.status(400).send({ message: "Content can not be emtpy!" });
            return;
        }
        //new user
        const user = new Userdb({
                name: req.body.name,
                price: req.body.email,
                gender: req.body.gender,
                status: req.body.status
            })
            //save 
        user
            .save(user)
            .then(data => {
                //res.send(data)
                res.redirect('/add-user');
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occured while creatin a create operation"
                })
            })
    }
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id" + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id" + id })
            })
    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving user infomation" })
            })
    }
}
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Udate user with${id}.Maybe user not found` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user infomation" })
        })
}
exports.delete = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }
    const id = req.params.id;
    Userdb.findByIdAndDelete(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Udate user with${id}.Maybe user not found` })
            } else {
                res.redirect("/")
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user infomation" })
        })
}