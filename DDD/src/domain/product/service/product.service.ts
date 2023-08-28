import Product from "../entity/product";

export class ProductService {
    static incrementsPrice(products: Product[], pricePercentage: number): void{
        if(pricePercentage <= 0){
            throw new Error("Percentage must be greater than zero.");
        }

        products.forEach(product => 
            product.priceChange((
                (product.price*pricePercentage)/100)+product.price
            )
        )
    }
}