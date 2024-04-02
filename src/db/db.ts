import { SQLClient} from 'nodeash-sql'
import { DBConfig } from '../config/config';

/**
 * Creates an instance of SQLClient.
 * @param {ConnectionConfig} config - The configuration object for the database connection.
 * @returns An object containing the functions for reading and writing to the database.
 */
if (!DBConfig.name || !DBConfig.username || !DBConfig.hostName || !DBConfig.password) {
    throw new Error('Environment variables for database connection are missing');
} 

export const  {DBRead , DBWrite , checkDatabaseConnection} =  SQLClient(DBConfig)


