import "reflect-metadata";
import Application from "./application/Application";
import Database from "./application/Database";

(async function () {
    module.exports = Application.initialize();
    Application.configureMiddleware();
    await Database.connect();
    Application.listen();
})();





