const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = {
    isAuthenticated: (request, response, next) => {
        try {
            // extract the token from the request headers
            const token = request.headers.authorization.split(' ')[1];
            

            // if the token is not present, return an error message
            if (!token) {
                return response.status(401).json({ message: 'Unauthorized' });
            }

            // verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // set the user id in the request object
            request.userId = decoded.id;

            // call the next middleware
            next();
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }
}

module.exports = auth;