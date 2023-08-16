import { ItemOrder } from "./item_order";

export class Order {
    private _id: string;
    private _customer_id: string;
    private _name: string;
    private _items: ItemOrder[] = [];

    constructor(id: string, customer_id: string, name: string, items: ItemOrder[]) {
        this._id = id;
        this._customer_id = customer_id;
        this._name = name;
        this._items = items;
        this.validate();
    }

    validate(): boolean{
        if(this._id.length === 0){
            throw new Error("Id is required");
        }

        if(this._customer_id.length === 0){
            throw new Error("Customer Id is required");
        }

        if(this._name.length === 0){
            throw new Error("Name is required");
        }

        if(this._items.length === 0){
            throw new Error("Items are required");
        }
        return true;
    }

    totalPrice(): number{
        return this._items.reduce((acc, item) => acc + item.getPrice(), 0);
    }
}