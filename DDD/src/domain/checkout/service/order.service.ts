import { Customer } from "../entity/customer";
import { ItemOrder } from "../entity/item_order";
import { Order } from "../entity/order";
import { v4 as uuid } from "uuid";

export class OrderService {
    static total(orders: Order[]): number{
        return orders.reduce((acc, order) => acc + order.totalPrice(), 0)
    }

    static placeOrder(customer: Customer, itemsOrder: ItemOrder[]){
        if(itemsOrder.length === 0){
            throw new Error("No items to order");
        }
        const order = new Order(uuid(), customer.id, "Order", itemsOrder);
        const points = order.totalPrice()/2;
        customer.addRewardsPoints(points);
        return order;
    }
}