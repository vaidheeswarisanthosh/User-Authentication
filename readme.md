Project Description:

This project demonstrates user authentication and authorization in a Node.js application using Express.js, Mongoose, and JWT. It follows the MVC (Model-View-Controller) design pattern and implements secure authentication with hashed passwords and Bearer tokens. Users can register, log in, and access protected routes with a valid token.

Features:

User Registration: Allows users to register with a username, email, and password. Passwords are securely hashed using bcrypt.

User Login: Authenticates users and provides a JWT upon successful login.

Protected Routes: Middleware verifies JWT tokens to protect sensitive routes.

Get User Information: Returns user details for authenticated users.

Error Handling: Comprehensive error handling for invalid requests, duplicate users, invalid tokens, etc.
API Documentation: Includes detailed documentation for API endpoints in Postman.

Tech Stack:

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT (JSON Web Token), bcrypt

Other: dotenv for environment variables, Postman for API documentation and testing



# API Endpoints:

1.User Registration:

# end point: POST  api/v1/auth/register

Description: Registers a new user.

2.User Login:

# Endpoint: POST api/v1/auth/login

Description: Logs in a user and returns a JWT token.

3.Get User Info

# Endpoint: GET api/v1/auth/me

Description: Retrieves information about the authenticated user.


# Detailed documentation for each API endpoint in Postman.

# https://documenter.getpostman.com/view/38636115/2sAYBRFu4B 