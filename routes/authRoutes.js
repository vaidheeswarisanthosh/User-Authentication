const express = require('express');
const authController = require('../controller/authController');
const auth = require('../utils/auth');
const authRouter = express.Router();

// define the endpoints
// public endpoints
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

// protected endpoints
authRouter.get('/me', auth.isAuthenticated, authController.me);
module.exports=authRouter;