import { Product } from "../entity/product"
import { ProductService } from "./product.service";

describe("Product service unit tests", ()=>{

    it("Should throw an error for percentage when it's less than or equal to zero.", ()=>{
        const product = new Product("Id1", "Product 1", 500);
        const product2 = new Product("Id2", "Product 2", 200);
        const products = [product, product2]

        expect(()=>{
            ProductService.incrementsPrice(products, -1);
        }).toThrowError("Percentage must be greater than zero.");

    })

    it("Should be possible to change the prices of all products.", ()=>{
        const product = new Product("Id1", "Product 1", 500);
        const product2 = new Product("Id2", "Product 2", 200);

        ProductService.incrementsPrice([product, product2], 10);
        expect(product.price).toBe(550);
        expect(product2.price).toBe(220);
    });

})