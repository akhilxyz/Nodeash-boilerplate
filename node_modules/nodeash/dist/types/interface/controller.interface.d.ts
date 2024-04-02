import { Request, Router } from 'express';
interface ControllerInterface {
    path: string;
    router: Router;
}
interface IExpressRequest extends Request {
    user?: {
        id: number;
        role: string;
    };
}
interface FileUploadConfig {
    name: string;
    maxCount: number;
    maxSize: number;
    supportedTypes: string[];
}
export { ControllerInterface, IExpressRequest, FileUploadConfig };
