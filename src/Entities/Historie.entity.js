import { DataTypes, Sequelize, UUID} from "sequelize";
import { sequelize as database } from "../database/connection.js";
import { ProductEntity } from "/Product.entity.js";

const HistorieEntity = database.define("tb_histories", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Lifetime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Production_process:{
        type: DataTypes.TEXT,
        allowNull: false
    },
});
    HistorieEntity.belongsTo(ProductEntity,{
    constraint: true,
    foreignKey: "id_Product"

})


export{HistorieEntity}