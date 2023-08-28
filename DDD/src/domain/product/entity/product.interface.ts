
export interface ProductInterface {
    id: string;
    name: string;
    price: number;

    validate(): boolean

    nameChange(name: string): void
    priceChange(price: number): void
}   