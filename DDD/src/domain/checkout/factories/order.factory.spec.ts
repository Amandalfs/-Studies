import { OrderFactory } from "./order.factory";

describe("Factory order tests units", ()=>{
    
    it("should create order with factory", ()=>{
    
        const item1 = {
            name: "Item 1",
            price: 100,
            productId: "p1",
            qtd: 4,
        }      

        const item2 = {
            name: "Item 2",
            price: 200,
            productId: "p2",
            qtd: 1,
        }           


        const order = OrderFactory.createOrder("Order 1", "customer id", [item1, item2]);
        expect(order.name).toEqual("Order 1");
        expect(order.items).toHaveLength(2);
        expect(order.items[0].name).toEqual(item1.name);
        expect(order.items[0].id).toBeDefined();
        expect(order.items[1].name).toEqual(item2.name);
        expect(order.items[1].id).toBeDefined();

    })
});