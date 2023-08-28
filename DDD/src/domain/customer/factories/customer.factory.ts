import { v4 as uuid } from "uuid";
import { Customer } from "../entity/customer";
import { Address } from "../entity/address";

export class CustomerFactory {

    static createCustomer(name: string){
        return new Customer(uuid(), name);
    }

    static createCustomerWithAddress(name: string, address: Address){
        const customer = new Customer(uuid(), name);
        customer.addAddress(address);
        return customer;
    }

}