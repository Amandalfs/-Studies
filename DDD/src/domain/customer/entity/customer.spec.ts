import { Address } from "./address";
import { Customer } from "./customer";

describe("Customer unit tests",()=>{

    it("should be possible throw error with the mandatory id error.",()=>{
        expect(()=>{
            new Customer("", "name");
        }).toThrowError("ID is required");
    });

    it("should be possible throw error with the mandatory name error.",()=>{
        expect(()=>{
            new Customer("id", "");
        }).toThrowError("Name is required");
    });

    it("Should throw mandatory address error to activate.",()=>{
        expect(()=>{
            const customer = new Customer("id1", "Customer 1");
            customer.activate();
        }).toThrowError("The address is mandatory to activate the account.");
    });

    it("should be possible to activate the account.",()=>{
        const customer = new Customer("id1", "Customer 1");
        const address = new Address("Rua", "Cidade", "Estado","0124535","pais");
        customer.addAddress(address);
        customer.activate();
        expect(customer.isActive()).toBe(true);
    })


    
    it("should be possible to deactivate the account.",()=>{
        const customer = new Customer("id1", "Customer 1");
        const address = new Address("Rua", "Cidade", "Estado","0124535","pais");
        customer.addAddress(address);
        customer.activate();
        customer.deactivate();
        expect(customer.isActive()).toBe(false);
    })

})