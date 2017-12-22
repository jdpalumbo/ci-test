import * as Express from "express-serve-static-core";
import { HealthController } from "../controllers/HealthController";


export class Routes {
    constructor(private app: Express.Router) {
    }

    public load() {
        this.app.get("/health", HealthController.get);
    }
}