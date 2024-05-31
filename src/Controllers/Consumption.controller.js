import { ConsumptionService } from "../Services/Consumption.service.js"


const instacieServiceConsumption = new ConsumptionService
 
const creatConsumptioncontroller = async (req, res)=>{
    const{  Measurement,power,duration,days}= req.body
    const newConsumption = await instacieServiceConsumption.createConsumption(
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
const updateConsumptionscontroler = async(req,res)=>{
    const{id} = req.params;
    const newresultConsumption = await instacieServiceConsumption.updateConsumptionsevice(id)
    res.json({newresultConsumption})

}
const updateIdprodctcontroller = async(req,res)=>{
    const{id} = req.params;
    const{newIdproduct} = req.bory;
    const newIDproduct = await instacieServiceConsumption.updateConsumptionsevice(id,newIdproduct)
    res.json({newIDproduct})
}



export {creatConsumptioncontroller,
        getallConsumptioncontroller,
        updateConsumptionscontroler,
       updateIdprodctcontroller}