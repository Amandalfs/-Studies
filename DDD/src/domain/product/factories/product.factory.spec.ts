import { ProductFactory } from "./product.factory";

describe("Factory product unit test", ()=>{

    it("should create product by factory",()=>{

        const product = ProductFactory.createProduct("A", "Product 1", 10);
        expect(product!.name).toEqual("Product 1");
        expect(product!.price).toEqual(10);
        expect(product!.id).toBeDefined();

    });
})