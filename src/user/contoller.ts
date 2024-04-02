/**
 * @fileoverview UserController contains the implementation of the user related APIs.
 */

import { Request, Response } from 'express';
import { USERSCHEMA } from '../model/user.model';

/**
 * @classdesc UserController contains the implementation of the user related APIs.
 */
class UserController {
  /**
   * @summary Registers a new user.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @returns {Promise<void>}
   */
  public async register(req: Request, res: Response): Promise<void> {
    try {
      await USERSCHEMA.WRITE.create(req.body);
      res.send('Register API called');
    } catch (error) {
      // Handle error
    }
  }

  /**
   * @summary Logs in an existing user.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @returns {void}
   */
  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await USERSCHEMA.READ.findOne({ where: { email, password } });

      if (!user) {
        // If user is not found, send an error response
        throw new Error('Invalid login credentials');
      }

      // If user is found, send success response
      res.send('Login successful');
    } catch (error :any ) {
      // Handle error
      res.status(400).send({ error: error.message }); // Send error response with status code 400
    }
  }
}

export default new UserController();