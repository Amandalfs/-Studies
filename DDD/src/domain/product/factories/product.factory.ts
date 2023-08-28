import { v4 as uuid } from 'uuid';
import { Product } from './../entity/product';
import { ProductInterface } from '../entity/product.interface';

export class ProductFactory {
    
    static createProduct(type: string, name: string, price: number): ProductInterface {
        if(type === "A"){
            return new Product(uuid(), name, price);
        }
        throw new Error("Type Invalid");
    }
} 