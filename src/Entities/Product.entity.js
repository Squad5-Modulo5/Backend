import { DataTypes, Sequelize } from "sequelize";
import { sequelize as database } from "../database/connection.js";
import { UserEntity } from "./User.entity.js";

const ProductEntity = database.define("tb_products", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_User: {  // Make sure this foreign key field exists in your model
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: UserEntity,
            key: 'id'
        }
    }
});

// Define associations after both models are initialized
ProductEntity.belongsTo(UserEntity, {
    foreignKey: 'id_User'
});

// Sincronização automática (apenas para desenvolvimento)
(async () => {
    try {
        await ProductEntity.sync({ alter: true });
        console.log('Tabela de produtos sincronizada com sucesso!');
    } catch (error) {
        console.error('Erro ao sincronizar tabela de produtos:', error);
    }
})();

export { ProductEntity };