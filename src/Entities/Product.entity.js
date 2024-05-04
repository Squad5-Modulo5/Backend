
import { DataTypes, Sequelize} from "sequelize";
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
    }
    
    
})
ProductEntity.belongsTo(UserEntity, {
    constraint: true,
    foreignKey: 'id_User'
})
UserEntity.hasMany(ProductEntity, {
 foreignKey: 'id_User',
 constraints: false

 })



 
     


export {ProductEntity}