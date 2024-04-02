
// Middleware for request body validation
import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validateSchema = (schema: any) => (req: Request | any, res: Response, next: NextFunction) => {
    // Your middleware logic here
    // Validate the request body against the schema
    const { error, value } = schema.body.validate(req.body);

    if (error) {
        // If validation fails, return a 400 Bad Request response with error details
        return res.status(400).json({ error: error.details[0].message });
    }

    // Validation succeeded; attach the validated data to the request object for further use
    req.validatedData = value;

    // Call the next middleware or route handler
    next(); // Only call next when you intend to move to the next middleware or route
}

export default validateSchema;
