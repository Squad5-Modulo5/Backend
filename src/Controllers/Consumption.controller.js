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
const creatConsumptionalonecontroller = async (req, res)=>{
    const{  Measurement,power,duration,days}= req.body
    const newConsumption = await instacieServiceConsumption.createConsumptionalone(
        Measurement,
        power,
        duration,
        days
       
        )
 
    res.json({newConsumption})

}
 const  getallConsumptioncontroller = async(req,res)=>{
    const consunpitions = await instacieServiceConsumption.getallConsumption()
    res.json({consunpitions}) 
 }




export {creatConsumptioncontroller,
        getallConsumptioncontroller,
        creatConsumptionalonecontroller
     }