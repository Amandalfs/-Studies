import { Customer } from "../entity/customer";
import { RepositoryInterface } from "../../@shared/repositories/repository.interface";

export interface CustomerRepositoryInterface extends RepositoryInterface<Customer> {}