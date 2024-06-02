import { Sequelize } from "sequelize"
const sequelize = new Sequelize('mysql://root:EGRuJjyQIIFRNzqMFiKkwUnVyeogCbWd@roundhouse.proxy.rlwy.net:19442/railway')

const testConnection = async () => {
    try{
        await sequelize.authenticate()
        console.log('Conexão com o banco de dados realizada com sucesso!')
    } catch(error){
        console.error('Conexão mal sucedida', error)
    }

}

export { sequelize, testConnection}