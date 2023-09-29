import { CreateCustomerUseCase } from "./create..customer.usecase";

const CustomerRepositoryMock = () => {
    return {
        find: jest.fn(),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    }
}


describe("usecase customer find test units", ()=>{

    it("should create a customer", async ()=>{
        const input = {
            name: "test1",
            address: {
                street: "street",
                city: "city",
                state: "state",
                cep: "cep",
                country: "country",
            }
        }
        const customerRepository = CustomerRepositoryMock();
        const suit = new CreateCustomerUseCase(customerRepository);
        const response = await suit.handle(input);
        expect(response.name).toEqual(input.name);
        expect(response.id).toBeDefined();
        expect(response.address).toEqual(input.address);
    });

});