import { Product } from "./product";

describe("Product unit tests", ()=>{

    it("should throw an error if ID is empty.", ()=>{
        expect(()=>{
            new Product("", "Product 1", 100);
        }).toThrowError("ID cannot be empty.");
    })

    it("Should throw an error if Name is empty", ()=>{
        expect(()=>{
            new Product("1", "", 100);
        }).toThrowError("Name cannot be empty.");
    })

    it("Should throw an error when price is equal to or less than zero", ()=>{
        expect(()=>{
            new Product("1", "Product 1", 0);
        }).toThrowError("Price must be greater than zero");
    })

    it("Should change name", ()=>{
        const product = new Product("id123", "Product 1", 200);
        product.nameChange("Product 2");
        expect(product.name).toBe("Product 2");
    })
})