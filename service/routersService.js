const boom = require('@hapi/boom');
const sequelize = require('../lib/sequealize');

class PartielsService {
    constructor() {
        this.products = [
            {
                name: "erik",
                id: 1
            }
            ,{
                name: "jose",
                id: 2
              }
        ];

       
  }
    

   async find() {

    const query_products = "SELECT * FROM products"
    const [data, metadata] = await sequelize.query(query_products)
    return data
    }

  async create(data) {
        const newProduct = {
            ...data
        };

        this.products.push(newProduct);
        return newProduct;
    }

   async update(id, changes) {
        const index = this.products.findIndex(product => product.id === id);

        if (index === -1) {
            throw boom.notFound('usuario not found');
        }

        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };

        return this.products[index];
    }

    delete(id) {
        const index = this.products.findIndex(product => product.id === id);

        if (index === -1) {
            throw new Error('Product not found');
        }

        this.products.splice(index, 1);
        return { id };
    }
}

module.exports = PartielsService;
