import { ItemOrder } from "../entity/item_order";
import { v4 as uuid } from 'uuid';
import { Order } from "../entity/order";

interface Item {
    name: string,
    price: number,
    productId: string,
    qtd: number,
}

export class OrderFactory {
    
    static createOrder(name: string, customerId: string, items: Item[]): Order{
        const itemsOrder = items.map(item => new ItemOrder(uuid(), item.name, item.price, item.qtd, item.productId));
        return new Order(uuid(), customerId, name, itemsOrder);
    }
}