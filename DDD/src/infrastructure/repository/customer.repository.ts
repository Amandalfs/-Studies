import { Address } from "../../domain/entity/address";
import { Customer } from "../../domain/entity/customer";
import { CustomerRepositoryInterface } from "../../domain/repositories/customers.repository.interface";
import { prisma } from "../db/prisma";

export class CustomerRepository implements CustomerRepositoryInterface {
    async create(entity: Customer): Promise<void> {
        try {
            await prisma.customer.create({
                data: {
                    id: entity.id,
                    name: entity.name,
                    rewardPoints: entity.rewardPoints,
                    active: entity.isActive(),
                    street: entity.address.street,
                    city: entity.address.city,
                    state: entity.address.state,
                    cep: entity.address.cep,
                    country: entity.address.country,

                }
            })            
        } catch (error) {
            
        }
    }
    async update(entity: Customer): Promise<void> {
        try {
            await prisma.customer.update({
                data: {
                    id: entity.id,
                    name: entity.name,
                    rewardPoints: entity.rewardPoints,
                    active: entity.isActive(),
                    street: entity.address.street,
                    city: entity.address.city,
                    state: entity.address.state,
                    cep: entity.address.cep,
                    country: entity.address.country,
                },
                where: {
                    id: entity.id
                }
            })
        } catch (error) {
            
        }
    }
    async find(id: string): Promise<Customer> {
        try {
            const result = await prisma.customer.findUniqueOrThrow({
                where: {
                    id,
                }
            });
            const customer = new Customer(
                result.id,
                result.name,
            );
            const address = new Address(
                result.street,
                result.city,
                result.state,
                result.cep,
                result.country
            );
            customer.addAddress(address);
            result.rewardPoints > 0 ? customer.addRewardsPoints(result.rewardPoints): customer;
            result.active ? customer.activate(): customer;
            return customer;
        } catch (error) {
            throw new Error("Customer not found.");
        }
    }

    async findAll(): Promise<Customer[]> {
        try {
            const results = await prisma.customer.findMany();
            if(results.length === 0){
                throw new Error;
            }
            return results.map((result)=> {
                const customer = new Customer(
                        result.id,
                        result.name,
                    );
                    const address = new Address(
                        result.street,
                        result.city,
                        result.state,
                        result.cep,
                        result.country
                    );
                    customer.addAddress(address);
                    result.rewardPoints > 0 ? customer.addRewardsPoints(result.rewardPoints): customer;
                    result.active ? customer.activate(): customer;
                    return customer;
                })
        } catch (error) {
            throw new Error("Customers not found.");
        }
    }

}