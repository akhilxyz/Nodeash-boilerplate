/**
 * Import the necessary modules from Node.js
 */
import { ServerClient } from 'nodeash';
import userRoutes from './user/routes';
/**
 * Define an array of controllers
 */

const controllers: any = [userRoutes];

/**
 * Create a new instance of the ServerClient class
 */
const server = new ServerClient({
  port: 3007,
  baseUrl: '/api',
  controllers,
});

/**
 * Start the server and listen on the specified port
 */
server.startServer();