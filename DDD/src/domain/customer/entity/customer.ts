import  { Address } from "./address";

export class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get id(): string {
        return this._id;
    }

    get rewardPoints():number{
        return this._rewardPoints;
    }
    
    get name(): string {
        return this._name;
    }

    get address(): Address {
        return this._address;
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

    addRewardsPoints(points: number){
        if(points <= 0){
            throw new Error("Points must be greater than zero.");
        }
        if(isNaN(Number(points))){
            throw new Error("Invalid points, it needs to be a number.");
        }
        this._rewardPoints += points;
    }

    changeName(name: string): void{
        this._name = name;
        this.validate();
    }

    addAddress(address: Address): void{
        this._address = address;
    }

    activate(): void{
        this._active = true;
        if(this._address === undefined){
            throw new Error("The address is mandatory to activate the account.");
        }
    }

    deactivate(): void{
        this._active = false;
    }

    isActive(): boolean{
        return this._active;
    }
}