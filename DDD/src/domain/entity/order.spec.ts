import { Customer } from "./customer";
import { ItemOrder } from "./item_order";
import { Order } from "./order";

describe("Order unit tests", ()=>{

    it("Should throw error Id Required",()=>{
        expect(()=> { new Order("", "id_customer", "name", [])}).toThrowError("Id is required");
    })

    it("Should throw error Customer Id Required",()=>{
        expect(()=> { new Order("id", "", "name", [])}).toThrowError("Customer Id is required");
    })

    it("Should throw error Name Required",()=>{
        expect(()=> { new Order("id", "customer_id", "", [])}).toThrowError("Name is required");
    })

    it("Should throw error Items required", ()=>{
        expect(()=> { new Order("id", "customer_id", "name", [])}).toThrowError("Items are required");
    })

    it("Should calculator total price of items", ()=>{
        const item1 = new ItemOrder("i1", "Item 1", 100, 1, "product id");
        const item2 = new ItemOrder("i2", "Item 2", 200, 1, "product id");

        const order = new Order("id", "customer_id", "name", [item1, item2]);
        expect(order.totalPrice()).toBe(300);
    })

    it("Should create order",()=>{
        new Customer("123", "Name Customer");
        const item1 = new ItemOrder("i1", "Item 1", 100, 1, "product id");
        const item2 = new ItemOrder("i2", "Item 2", 200, 1, "product id");
        const order = new Order("123", "customer_id", "name", [item1, item2]);
        expect(order.validate()).toBe(true);
    })

    it("Should throw an error when sending invalid points.", ()=>{
        expect(()=>{
            const customer = new Customer("123", "Name Customer");
            customer.addRewardsPoints(NaN);
        }).toThrowError("Invalid points, it needs to be a number.");
    })

    it("Should throw an error if points are less than or equal to zero.", ()=>{
        expect(()=>{
            const customer = new Customer("123", "Name Customer");
            customer.addRewardsPoints(-1);
        }).toThrowError("Points must be greater than zero.");
    })
})