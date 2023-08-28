import { Order } from "../entity/order";
import { RepositoryInterface } from "../../@shared/repositories/repository.interface";

export interface OrderRepositoryInterface extends RepositoryInterface<Order> {}