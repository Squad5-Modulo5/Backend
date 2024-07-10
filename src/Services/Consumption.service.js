import { ConsumptionEntity } from "../Entities/Consumption.entity.js"
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
          Measurement,
          power,
          duration,
          days,
          resultConsumption
      });

      return newConsumption;
  } catch (error) {
  
      console.error("Erro ao criar consumo!:", error);
      throw error;
  }
}        
     
}

   export {ConsumptionService}