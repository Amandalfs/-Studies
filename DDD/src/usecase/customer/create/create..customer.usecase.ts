import { CustomerFactory } from "../../../domain/customer/factories/customer.factory";
import { CustomerRepositoryInterface } from "../../../domain/customer/repositories/customers.repository.interface";
import { InputCreateCustomerDTO, OutputCreateCustomerDTO } from "./create.customer.dto";
import { Address } from './../../../domain/customer/entity/address';

export class CreateCustomerUseCase{

    constructor(private customerRepository: CustomerRepositoryInterface){}

    async handle({name, address}: InputCreateCustomerDTO): Promise<OutputCreateCustomerDTO>{
        const customerAddress = new Address(address.street, address.city, address.state, address.cep, address.country);
        const customer = CustomerFactory.createCustomerWithAddress(name, customerAddress);
        await this.customerRepository.create(customer);
        return {
            id: customer.id,
            name: customer.name,
            address: {
                cep: customer.address.cep,
                city: customer.address.city,
                country: customer.address.country,
                state: customer.address.state,
                street: customer.address.street,
            }
        };
    }
}