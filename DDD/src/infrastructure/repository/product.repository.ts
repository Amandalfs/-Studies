import { Product } from "../../domain/entity/product";
import { ProductRepositoryInterface } from "../../domain/product/repositories/products.repository.interface";
import { prisma } from "../db/prisma";

export class ProductRepository implements ProductRepositoryInterface {
    async create(entity: Product): Promise<void> {
        try {
            await prisma.product.create({
                data: {
                    id: entity.id,
                    name: entity.name,
                    price: entity.price
                }
            })
        } catch (error) {
            
        }
    }

    async update(entity: Product): Promise<void> {
        try {
            await prisma.product.update({
                where: {
                    id: entity.id
                    },
                data: {
                    name: entity.name,
                    price: entity.price
                }   
            })
        } catch (error){

        }
    }

    async find(id: string): Promise<Product> {
        try {
            const result = await prisma.product.findUniqueOrThrow({
                where: {
                    id,
                }
            })
            return new Product(result.id, result.name, result.price);
        } catch (error) {
            throw new Error("Product not found.");
        }
    }

    async findAll(): Promise<Product[]> {
        try {
            const results = await prisma.product.findMany();

            if(results.length === 0){
                throw new Error;
            }
            
            return results.map((product) => new Product(product.id, product.name, product.price));
        } catch (error) {
            throw new Error("Products not found.");
        }
    }


}