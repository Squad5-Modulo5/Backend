import { DataTypes, Sequelize} from "sequelize";
import { sequelize as database } from "../database/connection.js";
import { ConsumptionEntity } from "/Consumption.entity.js";


const SpendingEntity = database.define("tb_spending", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rate: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
     resultSpeding:{
        type: DataTypes.INTEGER,
        allowNull: false
     }
    
});
SpendingEntity.belongsTo(ConsumptionEntity,{
    constraint: true,
    foreignKey: "id_Consumption"
})

// Sincronização automática (apenas para desenvolvimento)
(async () => {
    try {
        await SpendingEntity.sync({ alter: true });
        console.log('Tabela de SpendingEntity sincronizada com sucesso!');
    } catch (error) {
        console.error('Erro ao sincronizar tabela de produtos:', error);
    }
})();

export { ProductEntity };
export{SpendingEntity}
