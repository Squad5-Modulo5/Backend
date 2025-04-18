import { DataTypes, Sequelize } from "sequelize";
import { sequelize as database } from "../database/connection.js";
import { ProductEntity } from "./Product.entity.js";

const ConsumptionEntity = database.define("tb_consumptions", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    Measurement: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    power: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    },
    duration: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    },
    days: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    },
    resultConsumption: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    id_Product: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: ProductEntity,
            key: 'id'
        }
    }
});

// Relacionamento
ConsumptionEntity.belongsTo(ProductEntity, {
    foreignKey: 'id_Product',
    as: 'product' // Opcional: nome do relacionamento
});

// Sincronização automática
(async () => {
    try {
        await ConsumptionEntity.sync({ alter: true }); // Ou { force: true } para recriar a tabela
        console.log('Tabela de consumos sincronizada!');
    } catch (error) {
        console.error('Erro ao sincronizar tabela:', error);
    }
})();

export { ConsumptionEntity };