import { Customer } from "../../../domain/customer/entity/customer";
import { Address } from "../../../domain/customer/entity/address";
import { ItemOrder } from "../../../domain/checkout/entity/item_order";
import { Order } from "../../../domain/checkout/entity/order";
import { Product } from "../../../domain/product/entity/product";
import { v4 as uuid } from "uuid";
import { prisma } from "../../db/prisma";
import { OrderRepository } from "./order.repository";
import { CustomerRepository } from "../customer/customer.repository";
import { ProductRepository } from "../product/product.repository";
import { execSync } from 'child_process';

describe("Order repository unit tests", ()=>{

    beforeEach(async ()=>{
        execSync("npx prisma migrate deploy");
    });

    afterEach(async ()=>{
        execSync("npx prisma migrate reset --force");
    });

    it("Should create an order", async () => {
        const orderRepository = new OrderRepository();
        const customerRepository = new CustomerRepository();
        const productRepository = new ProductRepository();

        const customer = new Customer(uuid(), "Customer 1");
        const address = new Address("Street", "City", "State", "50512785-12", "Country");
        customer.addAddress(address);
        await customerRepository.create(customer);

        const product = new Product(uuid(), "Product 1", 100);
        const product2 = new Product(uuid(), "Product 2", 200);
        await productRepository.create(product);
        await productRepository.create(product2);

        const item1 = new ItemOrder(uuid(), "Product 1", 100, 2, product.id);
        const item2 = new ItemOrder(uuid(), "Product 2", 200, 1, product2.id);

        const order = new Order(uuid(), customer.id, "Order 1", [item1, item2]);

        await orderRepository.create(order);

        const orderModel = await prisma.order.findUnique({
            where: {
                id: order.id
            },
            include: {
                items: true
            }
        })
        expect(orderModel?.id).toBeDefined();
        expect(orderModel?.customerId).toBe(customer.id);
        expect(orderModel?.name).toBe(order.name);
        expect(orderModel?.items.length).toBe(order.items.length);
        expect(orderModel?.items).toContainEqual({
            id: item1.id,
            name: item1.name,
            price: item1.price,
            orderId: order.id,
            quantity: item1.quantity,
            productId: item1.productId
        })
        expect(orderModel?.items).toContainEqual({
            id: item2.id,
            name: item2.name,
            price: item2.price,
            orderId: order.id,
            quantity: item2.quantity,
            productId: item2.productId
        });

    });

    it("Should update an order", async () => {
        const orderRepository = new OrderRepository();
        const customerRepository = new CustomerRepository();
        const productRepository = new ProductRepository();

        const customer = new Customer(uuid(), "Customer 1");
        const address = new Address("Street", "City", "State", "50512785-12", "Country");
        customer.addAddress(address);
        await customerRepository.create(customer);

        const product = new Product(uuid(), "Product 1", 100);
        const product2 = new Product(uuid(), "Product 2", 200);
        await productRepository.create(product);
        await productRepository.create(product2);

        const item1 = new ItemOrder(uuid(), "Product 1", 100, 2, product.id);
        const item2 = new ItemOrder(uuid(), "Product 2", 200, 1, product2.id);

        const order = new Order(uuid(), customer.id, "Order 1", [item1, item2]);

        await orderRepository.create(order);

        const product3 = new Product(uuid(), "Product 3", 300);
        await productRepository.create(product3);

        const orderModel = await prisma.order.findUnique({
            where: {
                id: order.id
            },
            include: {
                items: true
            }
        })

        expect(orderModel?.items).toContainEqual({
            id: item1.id,
            name: item1.name,
            price: item1.price,
            orderId: order.id,
            quantity: item1.quantity,
            productId: item1.productId
        })
        expect(orderModel?.items).toContainEqual({
            id: item2.id,
            name: item2.name,
            price: item2.price,
            orderId: order.id,
            quantity: item2.quantity,
            productId: item2.productId
        });


        const item3 = new ItemOrder(uuid(), "Product 3", 300, 2, product3.id);
        order.addItem(item3);

        await orderRepository.update(order);

        const orderModelUpdate = await prisma.order.findUnique({
            where: {
                id: order.id
            },
            include: {
                items: true
            }
        });

        expect(orderModelUpdate?.items).toContainEqual({
            id: item3.id,
            name: item3.name,
            price: item3.price,
            orderId: order.id,
            quantity: item3.quantity,
            productId: item3.productId
        });
    });

    it("Should find an order", async () => {
        const orderRepository = new OrderRepository();
        const customerRepository = new CustomerRepository();
        const productRepository = new ProductRepository();

        const customer = new Customer(uuid(), "Customer 1");
        const address = new Address("Street", "City", "State", "50512785-12", "Country");
        customer.addAddress(address);
        await customerRepository.create(customer);
        
        const product = new Product(uuid(), "Product 1", 100);
        const product2 = new Product(uuid(), "Product 2", 200);
        await productRepository.create(product);
        await productRepository.create(product2);
        
        const item1 = new ItemOrder(uuid(), "Product 1", 100, 2, product.id);
        const item2 = new ItemOrder(uuid(), "Product 2", 200, 1, product2.id);
        
        const order = new Order(uuid(), customer.id, "Order 1", [item1, item2]);
        
        await orderRepository.create(order);
        
        const orderModel = await orderRepository.find(order.id);
        
        expect(orderModel.id).toBe(order.id);
        expect(orderModel.customer_id).toBe(customer.id);
        expect(orderModel.name).toBe(order.name);
        expect(orderModel.items.length).toBe(order.items.length);
        expect(orderModel.items).toEqual(order.items)
    })

    it("Should find all orders", async () => {
        const orderRepository = new OrderRepository();
        const customerRepository = new CustomerRepository();
        const productRepository = new ProductRepository();

        const customer = new Customer(uuid(), "Customer 1");
        const address = new Address("Street", "City", "State", "50512785-12", "Country");
        customer.addAddress(address);
        await customerRepository.create(customer);
        
        const product = new Product(uuid(), "Product 1", 100);
        const product2 = new Product(uuid(), "Product 2", 200);
        await productRepository.create(product);
        await productRepository.create(product2);
        
        const item1 = new ItemOrder(uuid(), "Product 1", 100, 2, product.id);
        const item2 = new ItemOrder(uuid(), "Product 2", 200, 1, product2.id);
        
        const order = new Order(uuid(), customer.id, "Order 1", [item1, item2]);
        
        await orderRepository.create(order);

        const item3 = new ItemOrder(uuid(), "Product 1", 100, 2, product.id);
        const item4 = new ItemOrder(uuid(), "Product 2", 200, 1, product2.id);
        
        const order2 = new Order(uuid(), customer.id, "Order 2", [item3, item4]);

        await orderRepository.create(order2);

        const orders = await orderRepository.findAll();

        expect(orders).toContainEqual(order);
        expect(orders).toContainEqual(order2);
    });
    
    it("Should throw an error if no order is found.", ()=>{
        const orderRepository = new OrderRepository();
        const customer = new Customer(uuid(), "Customer 1");
        const address = new Address("Street", "City", "State", "50512785-12", "Country");
        customer.addAddress(address);

        const product = new Product(uuid(), "Product 1", 100);
        const product2 = new Product(uuid(), "Product 2", 200);

        const item1 = new ItemOrder(uuid(), "Product 1", 100, 2, product.id);
        const item2 = new ItemOrder(uuid(), "Product 2", 200, 1, product2.id);
        
        const order = new Order(uuid(), customer.id, "Order 1", [item1, item2]);
        expect(async ()=>{
            await orderRepository.find(order.id);
        }).rejects.toThrowError("Order not found");
    })

    it("Should throw an error if no orders is found.", ()=>{
        const orderRepository = new OrderRepository();
        expect(async ()=>{
            await orderRepository.findAll();
        }).rejects.toThrowError("Orders not found");
    })

});