import { Order } from "../entity/order";
import { Product } from "../entity/product";
import { ItemOrder } from './../entity/item_order';
import { OrderService } from "./order.service";

describe("Order Service unit tests", ()=>{

    it("Should list total order",()=>{

        const Item1 = new ItemOrder("ItemID1", "Item 1", 100, 2, "idp1");
        const Item2 = new ItemOrder("ItemID2", "Item 2", 200, 1, "idp2");

        const order1 = new Order("Oid1", "132", "Order 1", [Item1, Item2]);
        const order2 = new Order("Oid2", "132", "Order 2", [Item1]);
        const order3 = new Order("Oid3", "132", "Order 3", [Item2]);

        const orders = [order1, order2, order3];
        const total = OrderService.total(orders);
        expect(total).toBe(800);
    });
});