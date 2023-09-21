
import { CustomerRepositoryInterface } from './../../../domain/customer/repositories/customers.repository.interface';
import { InputFindCustomerDTO, OutputFindCustomerDTO } from './find.customer.dto';

export class FindCustomerUseCase {
    constructor(private customerRepository: CustomerRepositoryInterface){}

    async handle({id}: InputFindCustomerDTO): Promise<OutputFindCustomerDTO>{
        const customer = await this.customerRepository.find(id);
        return {
            id: customer.id,
            name: customer.name,
            address: customer.address
        };
    }
}