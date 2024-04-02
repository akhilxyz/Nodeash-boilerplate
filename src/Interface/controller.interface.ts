import { NextFunction, Request, Response } from 'express';


export interface IControllerConfig { 
    method: string; 
    endpoint: string; 
    handler: (req: Request, res: Response) => void;
    middleware?: ((req: Request, res: Response, next: NextFunction) => void)[];
}
