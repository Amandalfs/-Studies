import { Customer } from "../entity/customer";
import { Order } from "../entity/order";
import { ItemOrder } from './../entity/item_order';
import { OrderService } from "./order.service";

describe("Order Service unit tests", ()=>{

    it("should list total order",()=>{

        const Item1 = new ItemOrder("ItemID1", "Item 1", 100, 2, "idp1");
        const Item2 = new ItemOrder("ItemID2", "Item 2", 200, 1, "idp2");

        const order1 = new Order("Oid1", "132", "Order 1", [Item1, Item2]);
        const order2 = new Order("Oid2", "132", "Order 2", [Item1]);
        const order3 = new Order("Oid3", "132", "Order 3", [Item2]);

        const orders = [order1, order2, order3];
        const total = OrderService.total(orders);
        expect(total).toBe(800);
    });

    it("should create order and get reward points", ()=>{
        const customer = new Customer("123", "Customer 1");
        const item1 = new ItemOrder("ItemID1", "Item 1", 100, 2, "idp1");
        const item2 = new ItemOrder("ItemID2", "Item 2", 200, 1, "idp2");
        
        const order = OrderService.placeOrder(customer, [item1, item2]);
        expect(order.customer_id).toBe("123");
        expect(customer.rewardPoints).toBe(200);

    })

    it("Should throw an error when sending empty items.", ()=>{
        expect(()=>{
            const customer = new Customer("123", "Customer 1");
            OrderService.placeOrder(customer, []);
        }).toThrowError("No items to order");
    })
});