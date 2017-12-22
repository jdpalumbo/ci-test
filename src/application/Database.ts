import { createConnection } from "typeorm";

export default class Database {
    public static async connect() {
        await createConnection({
            type: process.env.SQL_DRIVER,
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT,
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            entities: [
                __dirname + "/data/entities/*.js"
            ],
            synchronize: process.env.SYNCHRONIZE_DATABASE,
            logging: process.env.DATABASE_LOGGING
        });
    }
}