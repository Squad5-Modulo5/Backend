import { ConsumptionEntity } from "../Entities/Consumption.entity.js"
import { v4 as uuidv4 } from 'uuid';
class ConsumptionService{
  async createConsumption(Measurement, power, duration, days, id_Product) {
   
    const resultConsumption = (power * duration * days) / 1000;

    try {
     
        const newConsumption = await ConsumptionEntity.create({
            Measurement,
            power,
            duration,
            days,
            resultConsumption, 
            id_Product
        });

        return newConsumption;
    } catch (error) {
    
        console.error("Erro ao criar consumo!:", error);
        throw error;
    }

}
    async getallConsumption()
    {
    const allConsumption = await ConsumptionEntity.findAll()
    return allConsumption
}
async createConsumptionalone(Measurement, power, duration, days) {
    const resultConsumption = (power * duration * days) / 1000;
  
    try {
      const newConsumption = await ConsumptionEntity.create({
        id: uuidv4(), // Adiciona UUID
        Measurement,
        power,
        duration,
        days,
        resultConsumption,
        createdAt: new Date(), // Opcional se o Sequelize já configurar
        updatedAt: new Date()  // Opcional se o Sequelize já configurar
      });
      return newConsumption;
    } catch (error) {
      console.error("Erro detalhado:", error);
      throw new Error("Falha ao criar consumo: " + error.message);
    }
  }     
     
}

   export {ConsumptionService}