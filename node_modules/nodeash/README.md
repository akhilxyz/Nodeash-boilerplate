# Nodeash Server

Nodeash is a lightweight Node.js package for running servers efficiently.

## Installation

You can install Nodeash via npm:

```bash
npm install nodeash
```
# Usage
```bash
import {NodeashRoutes, ServerClient} from 'nodeash';

const register = (req, res) => {
    try {
        res.send('Register API called');
    } catch (error) {
        
    }
}

const login = (req, res) => {
    try {
        res.send('login API called');
    } catch (error) {
        
    }
}

// Example usage:
const userControllers = [
    {
        method: 'post',
        endpoint: '/register',
        handler:register
    },
    {
        method: 'post',
        endpoint: '/login',
        handler:login
    },
    // Add more controllers as needed
];

const userRoutes = new NodeashRoutes();
userRoutes.initializeRoutes('/user', userControllers);


// Define a route for the controller API path

const controllers  = [userRoutes]



const server = new ServerClient({port : 3007 , baseUrl : "/api", controllers});
server.startServer();


```
