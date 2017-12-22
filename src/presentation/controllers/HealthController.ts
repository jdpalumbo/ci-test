"use strict";

import { NextFunction, Request, Response } from "express";

export class HealthController {
    static get(req: Request, res: Response, next: NextFunction) {
        res.status(200);
        res.send({
            version: process.env.npm_package_version
        });
        next();
    }
}