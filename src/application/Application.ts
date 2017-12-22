import * as express from "express";
import * as Express from "express-serve-static-core";
import * as compression from "compression";
import * as errorHandler from "errorhandler";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import { Routes } from "../presentation/routes/Routes";
import { ApplicationEnvironments } from "../utilities/enumerations/ApplicationEnvironments";
import expressValidator = require("express-validator");

export default class Application {
    static instance: Express.Application;

    public static initialize() {
        Application.instance = express();
        Application.instance.set("port", process.env.LISTEN_PORT || 80);
        new Routes(Application.instance).load();
        return Application.instance;
    }

    public static configureMiddleware() {
        Application.assertApplicationIsInitialized();
        Application.instance.use(compression());
        Application.instance.use(logger(process.env.LOG_FORMAT || "combined"));
        Application.instance.use(bodyParser.json());
        Application.instance.use(bodyParser.urlencoded({extended: true}));
        Application.instance.use(expressValidator());

        if (Application.instance.get("env") !== ApplicationEnvironments.Production) {
            Application.instance.use(errorHandler());
        }
    }

    public static listen() {
        Application.assertApplicationIsInitialized();
        Application.instance.listen(Application.instance.get("port"), () => {
            console.log(" Application is running at http://localhost:%d in %s mode", Application.instance.get("port"), Application.instance.get("env"));
            console.log("  Press CTRL-C to stop\n");
        });
    }

    private static assertApplicationIsInitialized() {
        if (!Application.instance) {
            throw Error("Application not initialized, call Application.initialize first");
        }
    }

}
