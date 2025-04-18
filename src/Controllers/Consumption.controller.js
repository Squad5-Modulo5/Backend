import { ConsumptionService } from "../Services/Consumption.service.js"


const instacieServiceConsumption = new ConsumptionService
 
const creatConsumptioncontroller = async (req, res)=>{
    const{  Measurement,power,duration,days}= req.body
    const {id_Product} = req.params
    const newConsumption = await instacieServiceConsumption.createConsumption(
        Measurement,
        power,
        duration,
        days,
        id_Product
        )
 
    res.json({newConsumption})

}
const creatConsumptionalonecontroller = async (req, res) => {
    try {
      const { Measurement, power, duration, days } = req.body;
      
      // Validação básica
      if (!Measurement || !power || !duration || !days) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
      }
  
      const newConsumption = await instacieServiceConsumption.createConsumptionalone(
        Measurement,
        Number(power),
        Number(duration),
        Number(days)
      );
  
      return res.status(201).json(newConsumption);
    } catch (error) {
      console.error("Erro no controller:", error);
      return res.status(500).json({ error: error.message });
    }
  }
 const  getallConsumptioncontroller = async(req,res)=>{
    const consunpitions = await instacieServiceConsumption.getallConsumption()
    res.json({consunpitions}) 
 }




export {creatConsumptioncontroller,
        getallConsumptioncontroller,
        creatConsumptionalonecontroller
     }