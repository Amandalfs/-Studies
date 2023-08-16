
export class ItemOrder {
    private _id: string;
    private _name: string;
    private _quantity: number;
    private _price: number;
    private _productId: string;

    constructor(id: string, name: string, price: number, quantity: number, productId: string) {
        this._id = id;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
        this._productId = productId;
        this.validate();
    }

    validate(){
        if(this._id.length === 0){
            throw new Error("Id is required");
        }

        if(this._name.length === 0){
            throw new Error("Name is required");
        }

        if(this._quantity <= 0){
            throw new Error("Quantity must be greater than zero");
        }

        if(this._price <= 0){
            throw new Error("Price must be greater than zero");
        }

        if(this._productId.length === 0){
            throw new Error("Product id is required");
        }

        return true;
    }

    getPrice(): number{
        return this._price * this._quantity;
    }
}