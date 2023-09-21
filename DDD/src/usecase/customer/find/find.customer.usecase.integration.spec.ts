
import { execSync } from 'child_process';
import { CustomerRepository } from '../../../infrastructure/repository/customer/customer.repository';
import { CustomerFactory } from '../../../domain/customer/factories/customer.factory';
import { FindCustomerUseCase } from './find.customer.usecase';
import { Address } from '../../../domain/customer/entity/address';

describe("usecase customer find test units", ()=>{

    beforeEach(async ()=>{
        execSync("npx prisma migrate deploy");
    });

    afterEach(async ()=>{
        execSync("npx prisma migrate reset --force");
    });

    it("should find a customer", async ()=>{

        const customerRepository = new CustomerRepository();
        const address = new Address("street", "city", "state", "cep", "country");
        const customer = CustomerFactory.createCustomerWithAddress("Pc Gamer", address);
        await customerRepository.create(customer);
        const suit = new FindCustomerUseCase(customerRepository);
        const response = await suit.handle({id: customer.id});
        expect(response.name).toEqual(customer.name);
        expect(response.id).toEqual(customer.id);
        expect(response.address).toEqual(customer.address);
    });

});