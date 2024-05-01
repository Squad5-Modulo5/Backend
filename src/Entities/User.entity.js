import { DataTypes, Sequelize} from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const UserEntity = database.define("tb_User", {

    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
        role: {
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
        allowNull: true,
    }
});