import { CreateDataBase } from "nodeash-sql";
import { DBConfig } from "../config/config";

/**
 * Creates Database if not exists.
 * @param {DBConfig} config - The configuration object for the database connection.
 */
(async () => {
    CreateDataBase(DBConfig)
    return "This is an anonymous async function for creating a new database if not exist";
})();
