import { Order } from "../entity/order";

export class OrderService {
    static total(orders: Order[]): number{
        return orders.reduce((acc, order) => acc + order.totalPrice(), 0)
    }
}