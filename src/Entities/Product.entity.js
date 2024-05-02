
import { DataTypes, Sequelize} from "sequelize";
import { sequelize as database } from "../database/connection.js";


const ProductEntity = database.define("tb_products", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
   product_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
    
    
})
     


export {ProductEntity}