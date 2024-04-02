import { DataTypes } from "sequelize";
import createModelAndSchema from "./model";

// Create user attributes object
const userAttributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('USER', 'ADMIN'),
        allowNull: false,
        defaultValue: "USER"
    },
    is_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
};

// Use the function to create user model and schema
const { READ, WRITE } = createModelAndSchema("users", userAttributes);

export const USERSCHEMA = { READ, WRITE };
    