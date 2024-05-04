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
    
        console.error("Erro ao criar consumo:", error);
        throw error;
    }
}
    async getallConsumption()
    {
    const allConsumption = await ConsumptionEntity.findAll()
    return allConsumption
}
        
        async updateConsumptionsevice(id, newresultConsumption )
    {
        const  ConsumptionID= await ConsumptionEntity.findByPk(id);

        if(!ConsumptionID)
        { throw new NotFoundError(`Consumption ${ERRORS.NOT_FOUND}`)
    }
       { 
        await ConsumptionEntity.update( 
         
            { resultConsumption :  newresultConsumption },
            {
              where: {
                id,
              },
            }
            )
    }
   

}
async UpdateConsumption(id, newIdproduct) {
  const ConsumptionId = await ConsumptionEntity.findByPk(id);
  if (!ConsumptionId) {
      throw new NotFoundError(`Produto não encontrado(a)`);
  }
  await ConsumptionEntity.update( 
    { id_Product: newIdproduct},
    {
      where: {
        id,
      },
    });
  return `Deletado com sucesso!`;
}

}

   export {ConsumptionService}