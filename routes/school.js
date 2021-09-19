const express = require('express');

const router = express.Router();
const school_controller = require('../controllers/school_controller');

console.log('router loaded');


router.get('/schools', school_Controller.home);
