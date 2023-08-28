import { Address } from "../entity/address";
import { CustomerFactory } from "./customer.factory";

describe("Factory customer tests units", ()=>{

    it("should create customer with factory", ()=> {

        const customer = CustomerFactory.createCustomer("Customer 1");
        expect(customer.id).toBeDefined();
        expect(customer.name).toEqual("Customer 1");
        expect(customer.address).toBeUndefined();

    });

    it("should create customer and address with factory", ()=> {

        const address = new Address("street", "city", "state", "cep", "counry");
        const customerAndAddress = CustomerFactory.createCustomerWithAddress("Customer 1", address);
        expect(customerAndAddress.name).toEqual("Customer 1");
        expect(customerAndAddress.id).toBeDefined();
        expect(customerAndAddress.address.cep).toBeDefined();

    });

})