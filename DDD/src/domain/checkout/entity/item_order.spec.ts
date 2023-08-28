import { ItemOrder } from "./item_order";

describe("Item Order unit tests", ()=>{

    it("Should throw error when ID is required.",()=>{
        expect(()=>{
            new ItemOrder("", "name", 150, 1, "product id");
        }).toThrowError("Id is required");
    })

    it("Should throw error when name is required.",()=>{
        expect(()=>{
            new ItemOrder("id", "", 150, 1, "product id");
        }).toThrowError("Name is required");
    })

    it("Should throw an error when price is equal to or less than zero", ()=>{
        expect(()=>{
            new ItemOrder("id", "name", -1, 1, "product id");
        }).toThrowError("Price must be greater than zero")
    })    

    it("Should throw an error when quantity is equal to or less than zero", ()=>{
        expect(()=>{
            new ItemOrder("id", "name", 150, -1, "product id");
        }).toThrowError("Quantity must be greater than zero")
    })

    it("should be possible to see the price.", ()=>{
        const item1 = new ItemOrder("id", "Item 1", 150, 3, "product id");
        expect(item1.getPrice()).toEqual(450);
        const item2 = new ItemOrder("Id2", "Item 2", 450, 1, "product id");
        expect(item2.getPrice()).toEqual(450);
    })

    it("Should throw an error whenn product id is required", ()=>{
        expect(()=>{
            new ItemOrder("id", "name", 150, 1, "");
        }).toThrowError("Product id is required");
    });

});