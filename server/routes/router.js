const express = require('express');
const route = express.Router();

const services = require('../services/render');
const { default: mongoose } = require('mongoose');
const controller = require('../controller/controller')

/**
 * @description
 * @method GET/
 */


route.get('/', services.homeRoutes);
/**
 * @description
 * @method GET/add_user
 */


route.get('/add-user', services.add_user)
    /**
     * @description
     * @method GET/update_user
     */

route.get('/update-user', services.update_user)

//api
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.get('/api/users/:id', controller.delete);

module.exports = route