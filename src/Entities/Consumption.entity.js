import { DataTypes, Sequelize } from "sequelize";
import { sequelize as database } from "../database/connection.js";


const ConsumptionEntity = database.define("tb_consumptions", {
    id: {
        type: DataTypes.UUID,
        // @ts-ignore
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


export{ConsumptionEntity}
