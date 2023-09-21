
import { execSync } from 'child_process';
import { CustomerFactory } from '../../../domain/customer/factories/customer.factory';
import { FindCustomerUseCase } from './find.customer.usecase';
import { Address } from '../../../domain/customer/entity/address';


const address = new Address("street", "city", "state", "cep", "country");
const customer = CustomerFactory.createCustomerWithAddress("Pc Gamer", address);

const CustomerRepositoryMock = () => {
    return {
        find: jest.fn().mockResolvedValue(Promise.resolve(customer)),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    }
}


describe("usecase customer find test units", ()=>{

    it("should find a customer", async ()=>{
        const customerRepository = CustomerRepositoryMock();
        const suit = new FindCustomerUseCase(customerRepository);
        const response = await suit.handle({id: customer.id});
        expect(response.name).toEqual(customer.name);
        expect(response.id).toEqual(customer.id);
        expect(response.address).toEqual(customer.address);
    });

    it("should not find a customer", async ()=>{
        const customerRepository = CustomerRepositoryMock();
        const suit = new FindCustomerUseCase(customerRepository);
        customerRepository.find.mockImplementation(() => {
            throw new Error("Customer not found");
        })
        await expect(
            suit.handle({id: customer.id})
        ).rejects.toThrow("Customer not found");
    
    });

});