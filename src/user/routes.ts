import { NodeashRoutes } from 'nodeash';
import { IControllerConfig } from '../Interface/controller.interface';
import UserController from './contoller';
import validateSchema from '../middleware/validator.middleware'
import { UserValidator } from '../common/validators';
/**
 * UserRoutes class
 */
class UserRoutes {
    /**
     * Array of controller configurations
     * Node.js Express router instance
     * Parent route for all user routes
     */
    controllers: IControllerConfig[];
    routes: NodeashRoutes;
    parentRoute: string = '/user';

    /**
     * Initialize the UserRoutes
     */
    constructor() {
        const { register, login } = UserController

        this.controllers = [
            {
                method: 'post',
                endpoint: '/register',
                handler: register,
                middleware: [validateSchema(UserValidator.register)]
            },
            {
                method: 'post',
                endpoint: '/login',
                handler: login,
                middleware: [validateSchema(UserValidator.login)]
            },
        ];
        this.routes = new NodeashRoutes();
        this.routes.initializeRoutes(this.parentRoute, this.controllers);
    }
}

/**
 * Export the UserRoutes routes
 */
export default new UserRoutes().routes;