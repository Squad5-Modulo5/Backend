import { DataTypes, Sequelize } from "sequelize";
import { sequelize as database } from "../database/connection.js";

import { ProductEntity } from "./Product.entity.js";

Sequelize.UUIDV4 = undefined;
const ConsumptionEntity = database.define("tb_consumptions", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    Measurement: {
        type: DataTypes.STRING,
        allowNull: false
    },
    power: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    duration: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    days: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
     resultConsumption:{
        type: DataTypes.DECIMAL,
        allowNull: false
     }
     
    });

    ConsumptionEntity.belongsTo(ProductEntity,{
        constraint: true,
        foreignKey: "id_Product"
    })
export{ConsumptionEntity}
