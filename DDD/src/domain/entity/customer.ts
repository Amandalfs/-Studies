import  { Address } from "./address";

export class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate(){
        if(this._id.length === 0){
            throw new Error("ID is required");
        }

        if(this._name.length === 0){
            throw new Error("Name is required");
        }
        return true;
    }

    changeName(name: string){
        this._name = name;
        this.validate();
    }

    addAddress(address: Address){
        this._address = address;
    }

    activate(){
        this._active = true;
        if(this._address === undefined){
            throw new Error("The address is mandatory to activate the account.");
        }
    }

    deactivate(){
        this._active = false;
    }

    isActive(){
        return this._active;
    }
}