import { execSync } from "child_process";
import { v4 as uuid } from "uuid";
import { prisma } from "../db/prisma";
import { CustomerRepository } from "./customer.repository";
import { Customer } from "../../domain/entity/customer";
import { Address } from "../../domain/entity/address";

describe("Customer repository unit tests", ()=>{
    beforeEach(async ()=>{
        execSync("npx prisma migrate deploy");
    });

    afterEach(async ()=>{
        execSync("npx prisma migrate reset --force");
    });

    it("Should create a customer", async ()=>{
        const customerRepository = new CustomerRepository();
        const customer = new Customer(uuid(), "Customer 1");
        const address = new Address("Street", "City", "State", "102305", "Country");
        customer.addAddress(address);
        
        await customerRepository.create(customer);

        const customerModel = await prisma.customer.findUnique({
            where: {
                id: customer.id
            }
        })
        expect(customerModel).toStrictEqual({
            id: customer.id,
            name: customer.name,
            active: customer.isActive(),
            rewardPoints: customer.rewardPoints,
            street: customer.address.street,
            city: customer.address.city,
            state: customer.address.state,
            cep: customer.address.cep,
            country: customer.address.country
        })
    })

    it("Should update a customer", async ()=>{
        const customerRepository = new CustomerRepository();
        const customer = new Customer(uuid(), "Customer 1");
        const address = new Address("Street", "City", "State", "102305", "Country");
        customer.addAddress(address);
        
        await customerRepository.create(customer);

        const address2 = new Address("Street 2", "City 2", "State 2", "102302", "Country 2");
        customer.addAddress(address2);
        customer.changeName("Customer 2");

        await customerRepository.update(customer);
        
        const customerModel = await prisma.customer.findUnique({
            where: {
                id: customer.id
            }
        })

        expect(customerModel).toStrictEqual({
            id: customer.id,
            name: customer.name,
            active: customer.isActive(),
            rewardPoints: customer.rewardPoints,
            street: customer.address.street,
            city: customer.address.city,
            state: customer.address.state,
            cep: customer.address.cep,
            country: customer.address.country
        });
    })

    it("Should find a customer", async ()=>{
        const customerRepository = new CustomerRepository();
        const customer = new Customer(uuid(), "Customer 1");
        const address = new Address("Street", "City", "State", "102305", "Country");
        customer.addAddress(address);
        
        await customerRepository.create(customer);
        
        const customerModel = await customerRepository.find(customer.id);
        
        expect(customerModel).toStrictEqual(customer);
    });

    it("Should find all customers", async ()=>{
        const customerRepository = new CustomerRepository();
        const customer = new Customer(uuid(), "Customer 1");
        const customer2 = new Customer(uuid(), "Customer 2");
        const customer3 = new Customer(uuid(), "Customer 3");
        const address = new Address("Street", "City", "State", "102305", "Country");
        customer.addAddress(address);
        customer2.addAddress(address);
        customer3.addAddress(address);
        
        await customerRepository.create(customer);
        await customerRepository.create(customer2);
        await customerRepository.create(customer3);
        
        const customers = await customerRepository.findAll();
        expect(customers).toHaveLength(3);
        expect(customers).toContainEqual(customer);
        expect(customers).toContainEqual(customer2);
        expect(customers).toContainEqual(customer3);        
    });

    it("Should throw an error if no customer is found.", ()=>{
        const customerRepository = new CustomerRepository();
        const customer = new Customer(uuid(), "Customer 1");
        const address = new Address("Street", "City", "State", "102305", "Country");
        customer.addAddress(address);
        
        expect(async ()=>{
            await customerRepository.find(customer.id);
        }).rejects.toThrowError("Customer not found.");
    })

    it("Should throw an error if no products is found.", ()=>{
        const customerRepository = new CustomerRepository();
        expect(async ()=>{
            await customerRepository.findAll();
        }).rejects.toThrowError("Customers not found.");
    })
})