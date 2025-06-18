import { NextFunction, Request,Response } from "express";

export default class ErrorMiddleware {
    static handleError(err: Error, req: Request, res: Response, next: NextFunction) {
        if( req.originalUrl.startsWith('/api') ) {
            return res.status(500).json({
                message: 'Internal Server Error',
                error: err.message,
                stack: err.stack
            });
        }
    }
} 
