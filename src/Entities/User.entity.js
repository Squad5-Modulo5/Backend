import { DataTypes, Sequelize, UUID} from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const UserEntity = database.define("tb_User_ecolwkt", {

    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
        role: {
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
        allowNull: true,
    }
});