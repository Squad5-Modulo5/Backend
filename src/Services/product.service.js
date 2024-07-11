import {ProductEntity} from "../Entities/Product.entity.js";
class ProductsService{
   
    async createProductservice( product_name, category, id_User )
    { 
    ProductEntity.sync()
    const Product = await ProductEntity.create({product_name, category, id_User});
    return Product
    }
  
    async getallProductservice(id_User)
    {
     const allProducts = ProductEntity.findAll({
        where:{
            id_User,
        },
     })
     return allProducts
    }
  
    async deleteProduct(id) {
        const ProducId = await ProductEntity.findByPk(id);
        if (!ProducId) {
            throw new NotFoundError(`Produto não encontrado(a)`);
        }
        await ProductEntity.destroy({
            where: {
                id,
            },
        });
        return `Deletado com sucesso!!`;
    }
}
export {ProductsService}
 