import { DBRead, DBWrite } from "../db/db";

const createModelAndSchema = <T>(tableName: string, attributes: T) => {
    const WRITE = DBWrite.define(tableName, attributes);
    const READ = DBRead.define(tableName, attributes);
    return { READ, WRITE };
};

export default createModelAndSchema;
