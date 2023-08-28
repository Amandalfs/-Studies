import { Product } from "../entity/product";
import { RepositoryInterface } from "../../@shared/repositories/repository.interface";

export interface ProductRepositoryInterface extends RepositoryInterface<Product> {}