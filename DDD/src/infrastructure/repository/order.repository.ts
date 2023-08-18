import { ItemOrder } from "../../domain/entity/item_order";
import { Order } from "../../domain/entity/order";
import { OrderRepositoryInterface } from "../../domain/repositories/order.repository.interface";
import { prisma } from "../db/prisma";

export class OrderRepository implements OrderRepositoryInterface {
    async create(entity: Order): Promise<void> {
        try {
            await prisma.order.create({
                data: { 
                    id: entity.id,
                    customerId: entity.customer_id,
                    name: entity.name,
                    total: entity.totalPrice(),
                    items: {
                        create: entity.items.map((item)=>{
                            return {
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                quantity: item.quantity,
                                productId: item.productId,
                            }
                        })
                    }
                },
                include: {
                    items: true
                }
            })
        } catch (error) {
            
        }
      
    }
    async update(entity: Order): Promise<void> {
        try {
            await prisma.order.update({
                where: {
                    id: entity.id
                },
                data: {
                    customerId: entity.customer_id,
                    name: entity.name,
                    total: entity.totalPrice(),
                    items: {
                        upsert: entity.items.map((item)=>({
                            create:{ 
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                quantity: item.quantity,
                                productId: item.productId,
                            },
                            update: {
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                quantity: item.quantity,
                                productId: item.productId,
                            },
                            where: {
                                id: item.id
                            }
                        }))
                    }
                },
                include: {
                    items: true
                }
            })
        } catch (error) {
            console.log("Error Update", error);
        }
    }

    async find(id: string): Promise<Order> {
        try {
            const result = await prisma.order.findUniqueOrThrow({
                where: {
                    id: id
                },
                include: {
                    items: true
                }
            })
            const items = result.items.map((item)=>{
                return new ItemOrder(item.id, item.name, item.price, item.quantity, item.productId);
            })
            return new Order(result.id, result.customerId, result.name, items);
        } catch (error) {
            throw new Error("Order not found");
        }
    }

    async findAll(): Promise<Order[]> {
        try {
            const results = await prisma.order.findMany({
                include: {
                    items: true
                }
            });

            if(results.length === 0){
                throw new Error();
            }

            return results.map((result)=>{
                const items = result.items.map((item)=>{
                    return new ItemOrder(item.id, item.name, item.price, item.quantity, item.productId);
                })
                return new Order(result.id, result.customerId, result.name, items);
            })
        } catch (error) {
            throw new Error("Orders not found");
        }
    }

}